import { Achievement } from "@/components/Achievments";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { GlareCard } from "@/components/ui/GlareCard";
import { Navbar } from "@/components/ui/Navbar";
import WalkAnimation from "@/components/ui/WalkAnimation";
import { Upcoming } from "@/components/Upcoming";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
        <div className="max-w-7xl w-full ">
          <Navbar />
          <Hero />
        </div>
        <Upcoming/>
        <Achievement />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
