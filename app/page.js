"use client";

import Image from "next/image";
import { Poppins, Open_Sans } from "next/font/google";
import Link from "next/link";
import { FaShieldAlt, FaCheckCircle, FaGlobe } from "react-icons/fa";
import { useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className={`bg-white text-[#3A3A3A] ${openSans.className}`}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white max-w-[80%] mx-auto">
        <div className={`text-[#333333] text-xl ${poppins.className}`}>
          <Image src="/logo.png" width={80} height={0} />
        </div>
        <Link
          className="inline-flex items-center justify-center gap-2 text-sm border border-[#ED1D24] shadow bg-[#ED1D24] hover:bg-[#ED1D24] text-white font-medium rounded-full px-6 py-4 transition-all hover:scale-105"
          href="/submit"
        >
          What has been your experience?
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-between px-8 py-20 bg-white bg-cover max-w-[80%] mx-auto md:min-h-[500px]">
        {/* Floating Balls */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 bg-[#ED1D24] rounded-full" />
          <div className="absolute top-20 left-[40%] w-4 h-4 bg-[#166E38] rounded-full delay-1000" />
          <div className="absolute bottom-10 left-1/2 w-4 h-4 bg-black rounded-full delay-2000" />
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-[#ED1D24] rounded-full delay-1500" />
          <div className="absolute top-5 right-5 w-4 h-4 bg-[#166E38] rounded-full delay-500" />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            #SiasaYaID by Siasa Place
          </h1>
          <p className="text-gray-700 max-w-2xl">
            Access to IDs is a major barrier to young people's political
            participation.
          </p>

          <p className="text-gray-700 mb-10 max-w-2xl">
            We are collecting views on the challenges or pros of collecting
            identification cards in Kenya.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              className="inline-flex items-center justify-center gap-2 text-sm border border-[#ED1D24] shadow bg-[#ED1D24] hover:bg-white hover:text-[#ED1D24] text-white font-medium rounded-full px-6 py-4 pt-4 pb-4"
              href="/submit"
            >
              What has been your experience?
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 text-sm border border-[#166E38] shadow bg-white hover:bg-[#166E38] hover:text-white text-[#166E38] font-medium rounded-full px-6 py-4 pt-4 pb-4"
              href="/submit"
            >
              Other experiences
            </Link>
          </div>
        </div>
        <Image
          src="/kenyan-id.jpeg"
          width={400}
          height={400}
          alt="Hero"
          className="rounded-full border border-white shadow-lg"
        />
      </section>

      {/* Three Cards Section */}
      <section className="p-8 py-16 bg-gray-50 w-full">
        <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Security",
              text: "Your ID ensures your security and access to essential services.",
              icon: (
                <FaShieldAlt className="text-[#ED1D24] text-4xl mb-4 mx-auto animate-fadeIn" />
              ),
            },
            {
              title: "Verification",
              text: "A national ID helps verify identity and prevent fraud.",
              icon: (
                <FaCheckCircle className="text-[#166E38] text-4xl mb-4 mx-auto animate-fadeIn" />
              ),
            },
            {
              title: "Accessibility",
              text: "An ID opens doors to education, healthcare, and voting rights.",
              icon: (
                <FaGlobe className="text-black text-4xl mb-4 mx-auto animate-fadeIn" />
              ),
            },
          ].map(({ title, text, icon }) => (
            <div
              key={title}
              className="p-6 bg-white shadow-md rounded-md text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
            >
              {icon}
              <h3 className="text-gray-900 text-2xl font-medium">{title}</h3>
              <p className="mt-2 text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image & Text Section */}
      <section className="flex flex-col md:flex-row items-center p-8 gap-6 max-w-[80%] mx-auto pb-0">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/kenya.png"
            width={200}
            height={0}
            layout="intrinsic"
            alt="Information"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl font-semibold text-gray-900 mb-3">
            Your ID, Your Power!
          </h2>
          <p className="text-gray-700 max-w-2xl">
            An ID isn’t just an official document—it’s your key to security,
            opportunities, and freedom. From accessing services to unlocking
            economic potential, your ID gives you the power to own your future
            as a Kenyan.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              className="inline-flex items-center justify-center gap-2 text-sm border border-[#ED1D24] shadow bg-[#ED1D24] hover:bg-white hover:text-[#ED1D24] text-white font-medium rounded-full px-6 py-4 pt-4 pb-4"
              href="/submit"
            >
              Share Your Truth 🎤
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 text-sm border border-[#166E38] shadow bg-white hover:bg-[#166E38] hover:text-white text-[#166E38] font-medium rounded-full px-6 py-4 pt-4 pb-4"
              href="/submit"
            >
              Straight from the People 🗣️
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 text-center bg-gray-50 w-full mx-auto">
        Siasa Place &copy; 2025
      </footer>
    </div>
  );
}
