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

      <div className='flex justify-center relative my-20 z-6'>
        <div className=' flex-col items-center justify-center'>
          <Cover>
            <div className="text-6xl text-center leading-snug tracking-wide font-bold text-pink-300">
            Cultural Society of Silicon
            </div>
          </Cover>

          <TextGenerateEffect
            className='uppercase tracking-widest text-center text-blue-100 py-2'
            words='Unleash Your Passion, Embrace the Spotlight'
          />
          <a href="about" className="flex justify-center items-center">
            <MagicButton
              title="Show more about us"
              icon={<GiGuitar size={32} color="#620aa6" />}
              position="right"
              handleClick={() => console.log('Button clicked!')}
              otherClasses="my-custom-class"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero