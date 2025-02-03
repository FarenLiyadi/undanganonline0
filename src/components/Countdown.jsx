import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(countdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className='grid grid-cols-4 mx-8 text-white' data-aos='zoom-in'>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-[35px] font-playfair leading-none'>{timeLeft.days}</p>
        <p className='text-[18px] font-robotoslab leading-none'>Hari</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-[35px] font-playfair leading-none'>{timeLeft.hours}</p>
        <p className='text-[18px] font-robotoslab leading-none'>Jam</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-[35px] font-playfair leading-none'>{timeLeft.minutes}</p>
        <p className='text-[18px] font-robotoslab leading-none'>Menit</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-[35px] font-playfair leading-none'>{timeLeft.seconds}</p>
        <p className='text-[18px] font-robotoslab leading-none'>Detik</p>
      </div>
    </div>
  );
}
