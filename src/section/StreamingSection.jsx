export default function StreamingSection() {
  return (
    <section className="bg-[#ffb3b3] py-4 text-white overflow-hidden">
      <div className="container flex flex-col items-center text-center">
        <img
          src="/img/leaf.png"
          className="w-[100px] md:w-[160px]"
          data-aos="zoom-in"
        />
        <p
          className="text-[22px] md:text-[27px] font-gabriola text-white my-6 flex-wrap"
          data-aos="zoom-in"
        >
          “A perfect love is when a couple fall in love for many times and
          always with the same person.”
        </p>
        <h2
          className="text-[40px] md:text-[53px] font-vintage mt-4"
          data-aos="zoom-in"
        >
          Live Streaming
        </h2>
        <p className="text-[13px] md:text-[30px] font-arial" data-aos="zoom-in">
          Anda bisa menonton live streaming di Youtube melalui tombol dibawah
        </p>
        <img
          src="/img/streaming-img.jpg"
          className="my-4 rounded-2xl "
          data-aos="zoom-in"
        />

        <a
          href="https://youtube.com/live/cNHSo6gk2Sc?feature=share"
          className="border-[#353535] text-[#353535] px-6 py-1 rounded-md border-2 bg-white text-[13px] md:text-[18px] inline-flex  mx-auto items-center gap-2 mt-4 hover:border-white transition-all duration-300 ease"
          target="_blank"
          data-aos="zoom-in"
        >
          <i className="ri-youtube-fill"></i>
          Live Streaming
        </a>

        <p
          className="text-[13px] md:text-[30px] font-arial my-8"
          data-aos="zoom-in"
        >
          Live streaming Pemberkatan Nikah dapat disaksikan pada Kamis, 07
          September 2023 Pukul 11.00 WITA
        </p>

        <div className="p-8 border border-white rounded-2xl md:p-0 md:border-none">
          <p
            className="font-vintage text-[38px] md:text-[50px] leading-none"
            data-aos="zoom-in"
          >
            Our Pray
          </p>
          <hr
            className="h-[2px] bg-white mx-auto w-[10%] my-8"
            data-aos="zoom-in"
          />
          <p
            className="text-[22px] md:text-[27px] leading-loose font-gabriola"
            data-aos="zoom-in"
          >
            Demikian mereka bukan lagi dua melainkan satu. Karena itu, apa yang
            telah dipersatukan Allah, tidak boleh diceraikan manusia.
          </p>
          <p
            className="font-gabriola font-bold text-[27px] mt-6"
            data-aos="zoom-in"
          >
            - Matius (19 : 6) -
          </p>
        </div>
      </div>
    </section>
  );
}
