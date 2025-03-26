"use client";

import { useRef, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ExperiencesSlider() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const experiences = [
    { text: "It was difficult getting my ID due to long queues.", county: "Nairobi", name: "John Doe" },
    { text: "The process was smooth and easy in my county.", county: "Mombasa", name: "Jane Smith" },
    { text: "I faced a lot of bureaucracy and delays.", county: "Kisumu", name: "Peter Otieno" },
    { text: "I had to travel far to get my ID.", county: "Eldoret", name: "Mary Achieng" },
    { text: "No issues at all, very straightforward.", county: "Nakuru", name: "James Mwangi" },
    { text: "I had to provide extra documents which delayed my application.", county: "Thika", name: "Lucy Wanjiru" }
  ];

  const totalItems = experiences.length;

  const updateItemsPerView = () => {
    if (window.innerWidth < 768) {
      setItemsPerView(1);
    } else {
      setItemsPerView(3);
    }
  };

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.firstChild.offsetWidth + 24; // Card width + margin
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      sliderRef.current.style.transform = `translateX(-${index * itemWidth}px)`;
    }
    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    const prevIndex = currentIndex === 0 ? totalItems - itemsPerView : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  const scrollRight = () => {
    const nextIndex = currentIndex === totalItems - itemsPerView ? 0 : currentIndex + 1;
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-[90%] md:max-w-[80%] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          Shared Experiences
        </h2>
        <div className="relative overflow-hidden">
          <button
            onClick={scrollLeft}
            className="absolute left-2 md:left-0 z-10 bg-[#166E38] text-white p-3 rounded-full shadow-md top-1/2 transform -translate-y-1/2"
          >
            <FaArrowLeft />
          </button>
          <div className="w-full overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
            >
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="w-[90%] md:w-[30%] bg-white shadow-md rounded-md p-6 text-center mx-3 flex-shrink-0"
                >
                  <p className="text-gray-700">"{exp.text}"</p>
                  <p className="text-gray-600 mt-2">
                    - {exp.name}, {exp.county}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-2 md:right-0 z-10 bg-[#166E38] text-white p-3 rounded-full shadow-md top-1/2 transform -translate-y-1/2"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
