import { Achievment } from "@/components/Achievments";
import { CSSMembers } from "@/components/CSSMembers";
import Hero from "@/components/Hero";
import { GlareCard } from "@/components/ui/GlareCard";
import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 gap-80">
      <div className="max-w-7xl w-full ">
        <Navbar />
        <Hero />       
      </div>
      <Achievment />
    </main>
  );
}
