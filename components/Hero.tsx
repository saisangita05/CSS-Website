import { GiGuitar } from 'react-icons/gi';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Image from 'next/image';
import { LampContainer, LampDemo } from './ui/Lamp';
import { CustomSpotlight } from './ui/CustomSpotlight';
import { Cover } from './ui/Cover';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="#ed5182" />
        <Spotlight className='top-2 left-30 h-[80vh] w-[50vw]' fill="#a7e0e7" />
        <CustomSpotlight className="top-0 right-0 h-[80vh] w-[50vw]" fill="white" />
      </div>

      <div className="relative flex flex-col items-center mt-20">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center z-10">
          <Cover>
            <div className="text-6xl text-center leading-snug tracking-wide font-bold text-pink-300">
              Cultural Society of Silicon
            </div>
          </Cover>

          <TextGenerateEffect
            className="uppercase tracking-widest text-center text-blue-100 py-2"
            words="Unleash Your Passion, Embrace the Spotlight"
          />
          <a href="register" className="flex justify-center items-center w-full">
            <MagicButton
              title="Register"
              icon={<GiGuitar size={32} color="#620aa6" />}
              position="right"
              handleClick={() => console.log("Button clicked!")}
              otherClasses="my-custom-class"
            />
          </a>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-row justify-center items-center z-0">
        {/* <img
          src="/guitar.gif"
          alt="Guitar GIF"
          className="h-40 opacity-30"
        /> */}
        <img
          src="/theatre.gif"
          alt="Theatre GIF"
          className="w-3/5 opacity-30"
        />
      </div>
    </div>
  )
}

export default Hero