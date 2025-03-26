import Image from "next/image";
import { Poppins, Open_Sans } from "next/font/google";
import Link from "next/link";
import { FaShieldAlt, FaCheckCircle, FaGlobe, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import ExperiencesSlider from "@/components/ExperiencesSlider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className={`bg-white text-[#3A3A3A] ${openSans.className}`}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white max-w-[90%] md:max-w-[80%] mx-auto">
        <div className="flex flex-1 justify-center md:justify-start">
          <Link href={`/`}>
            <Image src="/logo.png" width={80} height={0} alt="logo" />
          </Link>
        </div>
        
        {/* Hide button on mobile */}
        <Link
          className="hidden md:flex items-center justify-center gap-2 text-sm border border-[#ED1D24] shadow bg-[#ED1D24] hover:bg-[#ED1D24] text-white font-medium rounded-full px-6 py-4 transition-all hover:scale-105 w-auto"
          href="/submit"
        >
          What has been your experience?
        </Link>
      </header>

      {/* Image & Text Section */}
      <section className="relative flex flex-col md:flex-row items-center gap-6 max-w-[80%] mx-auto pb-0">

        
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-3">
            Your ID, Your Power!
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto md:mx-0">
            An ID isn’t just an official document—it’s your key to security,
            opportunities, and freedom. From accessing services to unlocking
            economic potential, your ID gives you the power to own your future
            as a Kenyan.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Link
              className="inline-flex items-center justify-center gap-2 text-sm border border-[#ED1D24] shadow bg-[#ED1D24] hover:bg-white hover:text-[#ED1D24] text-white font-medium rounded-full px-6 py-4"
              href="/submit"
            >
              Share Your Truth 🎤
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 text-sm border border-[#166E38] shadow bg-white hover:bg-[#166E38] hover:text-white text-[#166E38] font-medium rounded-full px-6 py-4"
              href="/experiences"
            >
              Straight from the People 🗣️
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/kenya.png"
            width={200}
            height={0}
            layout="intrinsic"
            alt="Information"
          />
        </div>
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

      {/* BRING HERE */}

      {/* Hero Section */}
      {/* <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-16 md:py-20 bg-white bg-cover max-w-[90%] md:max-w-[80%] mx-auto md:min-h-[500px]">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-3 h-3 md:w-4 md:h-4 bg-[#ED1D24] rounded-full animate-glow" />
          <div className="absolute top-20 left-[40%] w-3 h-3 md:w-4 md:h-4 bg-[#166E38] rounded-full animate-glow delay-1000" />
          <div className="absolute bottom-10 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-black rounded-full animate-glow delay-2000" />
          <div className="absolute bottom-20 right-10 w-3 h-3 md:w-4 md:h-4 bg-[#ED1D24] rounded-full animate-glow delay-1500" />
          <div className="absolute top-5 right-5 w-3 h-3 md:w-4 md:h-4 bg-[#166E38] rounded-full animate-glow delay-500" />
        </div>

        
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            #SiasaYaID by Siasa Place
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto md:mx-0 text-sm md:text-base">
            Access to IDs is a major barrier to young people's political participation.
          </p>
          <p className="text-gray-700 mb-6 md:mb-10 max-w-2xl mx-auto md:mx-0 text-sm md:text-base">
            We are collecting views on the challenges or pros of collecting identification cards in Kenya.
          </p>

          
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <Link
              className="inline-flex items-center justify-center gap-2 text-sm border border-[#ED1D24] shadow bg-[#ED1D24] hover:bg-white hover:text-[#ED1D24] text-white font-medium rounded-full px-6 py-3"
              href="/submit"
            >
              What has been your experience?
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 text-sm border border-[#166E38] shadow bg-white hover:bg-[#166E38] hover:text-white text-[#166E38] font-medium rounded-full px-6 py-3"
              href="/experiences"
            >
              Other experiences
            </Link>
          </div>
        </div>

        
        <Image
          src="/kenyan-id.jpeg"
          width={300}
          height={300}
          alt="Hero"
          className="mt-8 md:mt-0 md:ml-10 rounded-full border border-white shadow-lg"
        />
      </section> */}

      



      {/* Experience Slider */}
      <ExperiencesSlider />

      <section className="w-full flex flex-col items-center text-center px-6 md:px-8 py-8 md:py-8 bg-[#166E38]">
        <div className="max-w-[80%] mx-auto">
          {/* Content */}
        <div className="flex justify-center mb-4">
          <Link href={`/`}>
            <Image src="/logo2.jpg" width={120} height={0} alt="siasa place" className="rounded-lg" />
          </Link>
        </div>
        <p className="text-white max-w-2xl text-sm md:text-base">
          Access to IDs is a major barrier to young people's political participation.
        </p>
        <p className="text-white mb-6 md:mb-10 max-w-2xl text-sm md:text-base">
          Follow Siasa Place on social media to stay informed and be part of the movement for change!
        </p>

         {/* Social Media Icons */}
         <div className="flex justify-center gap-6">
          <a href="https://www.facebook.com/siasaplace/?ref=br_rs" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white w-6 h-6 hover:scale-110 hover:opacity-80 transition-transform" />
          </a>
          <a href="https://twitter.com/siasaplace" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white w-6 h-6 hover:scale-110 hover:opacity-80 transition-transform" />
          </a>
          <a href="https://ke.linkedin.com/in/siasa-place-414327167" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-white w-6 h-6 hover:scale-110 hover:opacity-80 transition-transform" />
          </a>
          <a href="https://www.youtube.com/@siasaplacekenya" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white w-6 h-6 hover:scale-110 hover:opacity-80 transition-transform" />
          </a>
          <a href="https://www.instagram.com/siasaplaceke" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white w-6 h-6 hover:scale-110 hover:opacity-80 transition-transform" />
          </a>
          <a href="https://www.tiktok.com/@siasaplace" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-white w-6 h-6 hover:scale-110 hover:opacity-80 transition-transform" />
          </a>
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
