import { ContactForm } from "@/components/ContactForm";
import OneMoreFooter from "@/components/OtherFooter";
import { PinContainer } from "@/components/ui/3DPin";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeams";
import { Navbar } from "@/components/ui/Navbar";

export default function Contact() {
  return (
    <>
      <BackgroundBeamsWithCollision className="relative flex flex-col justify-center item-center overflow-hidden">
        <div className="max-w-7xl w-full">
          <Navbar />
        </div>
        <div className="text-center mb-12 mt-40">
          <p className="text-4xl font-bold text-white mb-4">Get in Touch</p>
          <p className="text-neutral-400 text-lg">
            Reach out to us for any inquiries, feedback, or support.</p>
        </div>
        <ContactForm />
        <div className="flex flex-col justify-center items-center text-center mb-12 mt-20">
          <p className="text-neutral-400 text-2xl font-bold">
            Contact info
          </p>
          <div className="px-8 pb-20 w-96 relative flex justify-center items-center">
            <PinContainer>
              <p>Email</p>
            </PinContainer>
            <PinContainer>
              <p>Email</p>
            </PinContainer>
            <PinContainer>
              <p>Email</p>
            </PinContainer>
          </div>
        </div>

      </BackgroundBeamsWithCollision>
      <OneMoreFooter />
    </>
  );
}