import Fireflies from '../components/Fireflies';

export default function HeroSection() {
  return (
    <section className='relative flex justify-center min-h-screen overflow-hidden text-center md:items-center bg-hero' id='home'>
      <Fireflies />
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='container z-[2] text-white mt-12 md:mt-0'>
        <p className='text-[19px] md:text-[20px] font-arial md:mb-4'>You&apos;re Invited!</p>
        <p className='text-[15px] md:text-[18px] font-roboto mb-4'>The Wedding Celebration of</p>
        <h1 className='font-vintage text-[48px] md:text-[120px] text-shadow1'>David & Aprilia</h1>
      </div>
      <div className='ocean-bottom'>
        <div className='wave'></div>
      </div>
    </section>
  );
}
