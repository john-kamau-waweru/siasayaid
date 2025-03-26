import { Poppins, Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Submit() {
  return (
    <div
      className={`bg-white text-[#3A3A3A] min-h-screen ${openSans.className}`}
    >
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white max-w-[80%] mx-auto">
        <div className={`text-[#333333] text-xl ${poppins.className}`}>
          <Link href={`/`}>
            <Image src="/logo.png" width={80} height={0} alt="logo" />
          </Link>
        </div>
        <Link
          className="inline-flex items-center justify-center gap-2 text-sm border border-[#166E38] shadow bg-white hover:bg-[#166E38] hover:text-white text-[#166E38] font-medium rounded-full px-6 py-4 pt-4 pb-4"
          href="/submit"
        >
          Other experiences
        </Link>
      </header>

      {/* Hero Section with Form */}
      <section className="flex flex-col justify-center items-center px-8 py-16 bg-white">
        <div className="bg-white shadow-lg p-8 rounded-lg max-w-lg w-full min-w-[40%]">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            Share Your Experience
          </h1>
          <p className="text-gray-700 max-w-2xl text-center">
            Access to IDs is a major barrier to young people's political
            participation.
          </p>
          <form className="space-y-2 pt-4">
            <div className="mb-5">
              <label className="block text-gray-800 font-normal mb-1 text-sm">
                Name *
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-800 font-normal mb-1 text-sm">
                County
              </label>
              <select className="w-full p-3 border rounded-lg">
                <option value="">Select County</option>
                {/* Add county options here */}
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-gray-800 font-normal mb-1 text-sm">
                Email (Optional)
              </label>
              <input type="email" className="w-full p-3 border rounded-lg" />
            </div>
            <div className="mb-5">
              <label className="block text-gray-800 font-normal mb-1 text-sm">
                Your Experience *
              </label>
              <textarea
                className="w-full p-3 border rounded-lg h-32"
                required
              ></textarea>
            </div>
            <div className="flex justify-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 text-sm border border-[#166E38] shadow bg-[#166E38] hover:bg-[#166E38] text-white font-medium rounded-full px-16 py-4 transition-all hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 text-center bg-gray-50 w-full mx-auto">
        Siasa Place &copy; 2025
      </footer>
    </div>
  );
}
