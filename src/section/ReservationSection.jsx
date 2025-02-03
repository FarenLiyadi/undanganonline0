import { useState } from "react";

export default function RSVP() {
  const [nama, setNama] = useState("");
  const [pax, setPax] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");
  const [pesan, setPesan] = useState("");

  const generateWhatsAppLink = () => {
    const phoneNumber = "62895338540487";
    const baseUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    let text = `Hai,%20saya%20${encodeURIComponent(
      nama
    )}%20ingin%20konfirmasi%20kehadiran%20pada%20undangan%20pernikahan%20digital%20bahwa%20`;

    if (konfirmasi === "Iya, Saya akan Hadir") {
      text += `Iya,%20Saya%20akan%20Hadir%20bersama%20${encodeURIComponent(
        pax
      )}%20orang.%20`;
    } else if (konfirmasi === "Maaf, Saya Tidak Bisa Hadir") {
      text += `Maaf,%20Saya%20Tidak%20Bisa%20Hadir.%20`;
    } else if (konfirmasi === "Saya masih ragu") {
      text += `Saya%20masih%20ragu%20untuk%20hadir.%20`;
    }

    text += `${encodeURIComponent(pesan)}%20Terima%20kasih%20ya.`;

    return `${baseUrl}&text=${text}`;
  };

  return (
    <div className=" bg-[#ffb3b3] py-8">
      <div className="container">
        <h2
          className="font-vintage text-center text-[50px] text-white"
          data-aos="zoom-in"
        >
          Reservasi
        </h2>
        <div
          className=" mt-4 rounded-[12px] flex flex-col gap-2 custom-shadow3 w-full md:w-4/5 mx-auto"
          data-aos="zoom-in"
        >
          <input
            type="text"
            name="nama"
            id="nama"
            placeholder="Isikan Nama Lengkap"
            className=" p-2 text-[#333333] text-[16px]"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <input
            type="text"
            name="pax"
            id="pax"
            placeholder="Jumlah"
            className=" text-[16px] p-2"
            value={pax}
            onChange={(e) => setPax(e.target.value)}
          />

          <textarea
            name="pesan"
            id="pesan"
            placeholder="Tambahkan Pesan Disini"
            className=" text-[16px] p-2 border-slate-300 border rounded-[4px]"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
          />
          <div className="flex flex-col items-start text-left">
            <p className=" text-[23px] text-white">Konfirmasi</p>
            <div className="flex items-center gap-2 ">
              <input
                type="radio"
                name="confirm"
                id="confirm-hadir"
                value="Iya, Saya akan Hadir"
                checked={konfirmasi === "Iya, Saya akan Hadir"}
                onChange={(e) => setKonfirmasi(e.target.value)}
              />
              <label
                htmlFor="confirm-hadir"
                className="text-[18px] text-white font-arima"
              >
                Iya, Saya akan Hadir
              </label>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="radio"
                name="confirm"
                id="confirm-ragu"
                value="Saya masih ragu"
                checked={konfirmasi === "Saya masih ragu"}
                onChange={(e) => setKonfirmasi(e.target.value)}
              />
              <label
                htmlFor="confirm-ragu"
                className="text-[18px] text-white font-arima"
              >
                Saya masih ragu
              </label>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="radio"
                name="confirm"
                id="confirm-tidakhadir"
                value="Maaf, Saya Tidak Bisa Hadir"
                checked={konfirmasi === "Maaf, Saya Tidak Bisa Hadir"}
                onChange={(e) => setKonfirmasi(e.target.value)}
              />
              <label
                htmlFor="confirm-tidakhadir"
                className="text-[18px] text-white font-arima"
              >
                Maaf, Saya Tidak Bisa Hadir
              </label>
            </div>
            <a
              href={generateWhatsAppLink()}
              className="bg-white border text-black text-[16px]  text-center rounded-xl mt-4 inline-flex px-8 py-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservasi via Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
