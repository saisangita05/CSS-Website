import { Achievement } from "@/components/Achievments";
import Footer from "@/components/Footer";
import { CSSMembers } from "@/components/CSSMembers";
import Hero from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Navbar } from "@/components/ui/Navbar";
import { Upcoming } from "@/components/Upcoming";

export default function Home() {
  return (
    <>
      <main className="relative flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 px-5 ">
        <div className="max-w-7xl w-full">
          <Navbar />
        </div>
          <Hero />
        <Upcoming />
        <Achievement />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
