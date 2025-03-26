import Image from "next/image";
import { Poppins, Open_Sans } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className={`bg-white text-[#3A3A3A] ${openSans.className}`}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white max-w-[80%] mx-auto">
        <div className={`text-[#333333] text-xl ${poppins.className}`}>
          <Image src="/logo.png" width={80} height={0} />
        </div>
        <Link
          class="inline-flex items-center justify-center gap-2 text-sm border border-[#ED1D24] shadow h-9 bg-[#ED1D24] hover:bg-[#ED1D24] text-white font-medium rounded-full px-6 py-3 transition-all hover:scale-105"
          href="/submit"
        >
          What has been your experience?
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-between px-8 py-16 bg-white bg-cover max-w-[80%] mx-auto md:min-h-[500px]">
        {/* Floating Balls */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 bg-[#ED1D24] rounded-full" />
          <div className="absolute top-20 left-[40%] w-4 h-4 bg-[#166E38] rounded-full delay-1000" />
          <div className="absolute bottom-10 left-1/2 w-4 h-4 bg-black rounded-full delay-2000" />
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-[#ED1D24] rounded-full delay-1500" />
          <div className="absolute top-5 right-5 w-4 h-4 bg-[#166E38] rounded-full delay-500" />
        </div>
        <div>
          <h1 class="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            #SiasaYaID by Siasa Place
          </h1>
          <p class="text-lg md:text-xl text-gray-800 mb-10 max-w-2xl">
            Access to IDs is a major barrier to young people's political
            participation.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              className="inline-flex items-center justify-center gap-2 text-sm border border-[#ED1D24] shadow h-9 bg-[#ED1D24] hover:bg-white hover:text-[#ED1D24] text-white font-medium rounded-full px-6 py-3"
              href="/submit"
            >
              What has been your experience?
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 text-sm border border-[#166E38] shadow h-9 bg-white hover:bg-[#166E38] hover:text-white text-[#166E38] font-medium rounded-full px-6 py-3"
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

      {/* CTA Section */}
      <section className="p-8 text-center bg-gray-100 max-w-[80%] mx-auto">
        <div className="bg-white shadow-md p-6 rounded-md">
          Join us today and make identification easy!
        </div>
      </section>

      {/* Three Cards Section */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[80%] mx-auto">
        {["Security", "Verification", "Accessibility"].map((title) => (
          <div key={title} className="p-6 bg-white shadow-md rounded-md">
            <h3 className={`text-[#333333] text-xl ${poppins.className}`}>
              {title}
            </h3>
            <p className="mt-2">
              Identification cards ensure {title.toLowerCase()}.
            </p>
          </div>
        ))}
      </section>

      {/* Image & Text Section */}
      <section className="flex flex-col md:flex-row items-center p-8 gap-6 max-w-[80%] mx-auto">
        <Image
          src="/info-image.png"
          width={300}
          height={200}
          alt="Information"
        />
        <div>
          <h2 className={`text-[#333333] text-2xl ${poppins.className}`}>
            Why Choose Us?
          </h2>
          <p className="mt-4">
            We provide the best services for identification.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-[#ED1D24] text-white px-4 py-2 rounded">
              Sign Up
            </button>
            <button className="bg-[#166E38] text-white px-4 py-2 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center bg-gray-100 max-w-[80%] mx-auto">
        &copy; 2025 Siasa Place
      </footer>
    </div>
  );
}
