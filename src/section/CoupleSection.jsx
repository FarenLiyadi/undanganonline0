export default function CoupleSection() {
  return (
    <section className="bg-[#ffb3b3] pb-4" id="couple">
      <div className="container flex flex-col items-center text-center">
        <img
          src="/img/leaf.png"
          className="w-[100px] md:w-[160px]"
          data-aos="zoom-in"
        />
        <p
          className="text-[22px] md:text-[25px] font-gabriola text-white my-12"
          data-aos="zoom-in"
        >
          Tuhan membuat segala sesuatu indah pada Waktu-Nya, indah ketika Dia
          mempertemukan kami <br />
          bukan karena sebuah kebetulan, tapi karena rencana-Nya sehingga Dia
          menetapkan kami <br />
          dalam satu ikatan Pernikahan Kudus, besar harapan kami kiranya
          Bapak/Ibu/saudara/i <br />
          turut bersukacita & mendoakan pernikahan kami.
        </p>
      </div>
      <div className="container-fluid">
        <div className="pt-16 pb-20 mx-4 text-black bg-white rounded-t-full custom-glow1">
          <div className="flex flex-col leading-tight text-center">
            <p
              className="text-[25px] md:text-[40px] font-maigre"
              data-aos="zoom-in"
            >
              David Tukunan
            </p>
            <div className="text-[15px] md:text-[25px] mt-2" data-aos="zoom-in">
              <p className="font-bold">Putra dari</p>
              <p>Tn. Jonny Tukunan</p>
              <p>&</p>
              <p>Ny. Dewi Watra</p>
            </div>
            <a
              href="#"
              className="inline-flex mx-auto mt-4 text-xl"
              data-aos="zoom-in"
            ></a>
          </div>
          <p
            className="text-[25px] md:text-[45px] font-maigre text-center my-8"
            data-aos="zoom-in"
          >
            &
          </p>
          <div className="flex flex-col leading-tight text-center">
            <p
              className="text-[25px] md:text-[40px] font-maigre"
              data-aos="zoom-in"
            >
              Aprilia Trisisilia Wirawan, S.H
            </p>
            <div className="text-[15px] md:text-[25px] mt-2" data-aos="zoom-in">
              <p className="font-bold">Putri dari</p>
              <p>Tn. Kusman Wijaya</p>
              <p>&</p>
              <p>Ny. Bernadeth Wongso</p>
            </div>
            <a
              href="#"
              className="inline-flex mx-auto mt-4 text-xl"
              data-aos="zoom-in"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
