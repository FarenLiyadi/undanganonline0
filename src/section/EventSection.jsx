export default function EventSection() {
  return (
    <section
      className="bg-[#ffb3b3] py-16 relative text-white text-center"
      id="event"
    >
      <div
        className="container bg-event w-full md:w-[80%] mx-auto pb-10"
        data-aos="zoom-in"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div>
        <div className="container z-[3] relative flex flex-col items-center">
          {/*<img
            src="/img/da-inisial.gif"
            className="w-[370px]"
            data-aos="zoom-in"
          />*/}
          <h2
            className="pt-4 font-vintage text-[38px] md:text-[51px]"
            data-aos="zoom-in"
          >
            Pemberkatan Nikah
          </h2>
          <div className="space-y-2 text-[17px] font-arima" data-aos="zoom-in">
            <p>Kamis, 07 September 2025</p>
            <p>11.00 WITA s.d Selesai</p>
          </div>
          <div
            className="my-4  text-[25px] md:text-[30px] font-gabriola text-center leading-none"
            data-aos="zoom-in"
          >
            <p className="font-bold">Lokasi</p>
            <p>Gereja Katholik Santo Fransiskus Asisi Makassar</p>
          </div>

          <hr className="w-3/4 h-px mx-auto my-8 bg-white" data-aos="zoom-in" />
          <h2
            className="font-vintage text-[38px] md:text-[51px]"
            data-aos="zoom-in"
          >
            Resepsi
          </h2>
          <div className="space-y-2 text-[17px] font-arima" data-aos="zoom-in">
            <p>Kamis, 07 September 2025</p>
            <p>18.30 WITA s.d Selesai</p>
          </div>
          <div
            className="my-4 text-[25px] md:text-[30px] font-gabriola text-center leading-none"
            data-aos="zoom-in"
          >
            <p className="font-bold">Lokasi</p>
            <p>Rest. Bambuden 3 Lt.2</p>
          </div>
        </div>
      </div>
    </section>
  );
}
