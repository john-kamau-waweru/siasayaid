"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins, Open_Sans } from "next/font/google";
import axios from "axios";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const { data } = await axios.get("/api/experiences");
      if (data.data.length === 0) {
        setMessage(data.message);
      } else {
        setExperiences(data.data);
      }
    } catch (error) {
      console.error("Error fetching experiences:", error);
      setMessage("Failed to fetch experiences");
    }
    setLoading(false);
  };

  return (
    <div className={`bg-white text-[#3A3A3A] ${openSans.className}`}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white max-w-[90%] md:max-w-[80%] mx-auto">
        <div className="w-full flex justify-center md:justify-start">
          <Link href={`/`}>
            <Image src="/logo.png" width={80} height={0} alt="logo" />
          </Link>
        </div>
        
        {/* Hide button on mobile */}
        <Link
          className="hidden md:inline-flex items-center justify-center gap-2 text-sm border border-[#ED1D24] shadow bg-[#ED1D24] hover:bg-[#ED1D24] text-white font-medium rounded-full px-6 py-4 transition-all hover:scale-105"
          href="/submit"
        >
          What has been your experience?
        </Link>
      </header>

      {/* Experiences List */}
      <section className="max-w-[80%] mx-auto py-10 min-h-[100vh]">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Experiences</h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading experiences...</p>
        ) : message ? (
          <p className="text-center text-gray-600">{message}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <div key={exp._id} className="p-6 bg-white shadow-md rounded-md">
                <h3 className="text-xl font-semibold text-gray-900">{exp.county}</h3>
                <p className="text-gray-700 mt-2">{exp.experience}</p>
                <p className="text-sm text-gray-500 mt-4">By {exp.name}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="p-8 text-center bg-gray-50 w-full mx-auto">
        Siasa Place &copy; 2025
      </footer>
    </div>
  );
}
