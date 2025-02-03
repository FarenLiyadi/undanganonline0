import Fireflies from '../components/Fireflies';

export default function FooterSection() {
  return (
    <section className='min-h-screen flex items-center justify-center text-center relative overflow-hidden '>
      <div className='bg-footer'></div>
      <Fireflies />
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='container z-[2] text-white mt-auto mb-20 md:mb-0 md:mt-48'>
        <p className='text-[19px] md:text-[20px] font-arial mb-4'>Thank You</p>
        <h1 className='font-vintage text-[40px] md:text-[76px] text-shadow1'>David & Aprilia</h1>
      </div>
      <div className='ocean-top'>
        <div className='wave'></div>
      </div>
    </section>
  );
}
