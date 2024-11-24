import { GiGuitar } from 'react-icons/gi';
import { FaBootstrap, FaHiking } from 'react-icons/fa'
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { CustomSpotlight } from './ui/CustomSpotlight';
import { Cover } from './ui/Cover';

const Hero = () => {
  return (
    <div className='pb-20 pt-44'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="#ed5182" />
        <Spotlight className='top-2 left-30 h-[80vh] w-[50vw]' fill="#a7e0e7" />
        <CustomSpotlight className="top-0 right-0 h-[80vh] w-[50vw]" fill="white" />
      </div>

      <div className="relative flex flex-col items-center mt-20">
        <div className="flex flex-col items-center justify-center z-10">
          <Cover>
            <div className="text-7xl text-center leading-snug tracking-wide font-bold text-fuchsia-400">
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
              otherClasses="text-2xl"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center z-0 ">
        <img
          src="/gif/guitar.gif"
          alt="Theatre GIF"
          className="w-1/4 opacity-30"
        />
        <img
          src="/gif/theatre.gif"
          alt="Theatre GIF"
          className="w-2/6 opacity-30"
        />
      </div>
    </div>
  )
}

export default Hero