import CountdownTimer from "../components/Countdown";
import Fireflies from "../components/Fireflies";

// Contoh countdown ke tanggal 31 Desember 2024 pukul 23:59:59
const targetDate = new Date("2025-09-07T23:59:59").getTime();

export default function CountdownSection() {
  return (
    <section className="relative py-16 pt-24 overflow-hidden md:py-32 bg-countdown">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Fireflies />
      <div className="container text-center z-[2] relative text-white mt-32 md:mt-0 ">
        <h2
          className="text-[40px] md:text-[43px] font-vintage"
          data-aos="zoom-in"
        >
          Countdown Timer
        </h2>
        <div className="my-4 md:my-10">
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </section>
  );
}
