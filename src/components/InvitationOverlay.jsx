import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

export default function InvitationOverlay() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const tamu = [
    {
      id: "9e0fb12c-f468-4f99-abba-a69f5e64a4e7",
      user_id: "8a1716ca-daca-11ef-ad72-00e04c360546",
      nomor_undian: "21302001",
      grup_tamu: "teman papa",
      nama: "Like",
      alamat: null,
      alias_tamu: "liyadi",
      meja: "mawar",
      pax: 3,
      kategori: "Wanita",
      note: "-",
      gift: 0,
      hadir: 1,
      status: 0,
      is_skip: 0,
      is_deleted: 0,
      is_locked: 0,
      created_by: "4d263ad6-dac8-11ef-ad11-00e04c360546",
      updated_by: "5612fa1a-dc64-11ef-9617-00e04c360546",
      deleted_by: null,
      deleted_at: null,
      created_at: "2025-01-26T14:39:02.000000Z",
      updated_at: "2025-01-27T04:36:23.000000Z",
    },
  ];
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const recipientName = params.get("to") || "Tamu Undangan";

    const audioFile = new Audio(
      "/audio/yt1s.com-Beautiful-in-White-x-Canon-in-D-Piano-Cover-by-Riyandi-Kusuma-1.mp3"
    );
    setAudio(audioFile);

    document.getElementById("recipientName").innerText = recipientName;
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [qrData, setQrData] = useState("");

  // console.log(template2[0].cover);
  function showQr(id) {
    setQrData(id);
    setShowModal(true);
  }

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayVisible]);

  const handleOpenInvitation = () => {
    setIsSlidingUp(true);
    showQr(tamu[0].id);
    setTimeout(() => {
      setIsOverlayVisible(false);
      audio.play();
      setIsPlaying(true);
    }, 500);
  };

  const handlePlayMusic = () => {
    audio.play();
    setIsPlaying(true);
  };

  const handleStopMusic = () => {
    audio.pause();
    setIsPlaying(false);
  };

  return (
    <div>
      {isOverlayVisible && (
        <div
          className={`fixed inset-0 bg-overlay  bg-opacity-75 flex justify-center items-center z-[100] transition-transform duration-500 ${
            isSlidingUp
              ? "transform translate-y-full"
              : "transform translate-y-0"
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="text-center text-white z-[2]">
            <img
              src="/img/theweddingof.png"
              className="w-[280px] md:w-[250px] mx-auto"
            />
            <h1 className="font-vintage text-[49px] md:text-[80px]">
              David & Aprilia
            </h1>
            <p className="text-[18px] md:text-[27px]">Kepada Yth,</p>
            <h1
              id="recipientName"
              className="text-[30px] md:text-[35px] my-4 font-gabriola "
            ></h1>
            <p className="text-[16px] md:text-[30px]">
              Tanpa Mengurangi Rasa Hormat, Kami Mengundang <br />
              Bapak/Ibu/Saudara/i Untuk Menghadiri Acara Pernikahan Kami.
            </p>
            <button
              onClick={handleOpenInvitation}
              className="mt-12 bg-[#ffb3b3] text-white px-6 py-1 rounded-full text-[15px]  md:text-[18px] flex items-center gap-2 mx-auto"
            >
              <i className="ri-mail-open-fill"></i>
              Buka Undangan
            </button>
          </div>
        </div>
      )}

      <div className="fixed md:bottom-0 z-50 left-4 bottom-[10%] ">
        {isPlaying ? (
          <button
            onClick={handleStopMusic}
            className=" rounded-full text-[32px]  md:text-[48px]  aspect-square flex items-center justify-center text-white"
          >
            <i className="ri-stop-circle-fill"></i>
          </button>
        ) : (
          <button
            onClick={handlePlayMusic}
            className="  rounded-full  text-[32px] md:text-[48px]  aspect-square flex items-center justify-center text-white"
          >
            <i className="ri-play-circle-fill"></i>
          </button>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white mx-auto w-80 p-5 rounded shadow-lg text-center ">
            <div className="w-full flex justify-center">
              <QRCode size={150} value={qrData} />
            </div>
            <table className="w-full mt-4 uppercase font-medium text-2xl">
              <tr className=" align-top">
                <td className="text-left w-12">To</td>
                <td className="text-right w-8">:</td>
                <td className="w-72 text-start pl-2 italic">{tamu[0].nama}</td>
              </tr>
              <tr className="">
                <td className="text-left w-12">Meja</td>
                <td className="text-right w-8">:</td>
                <td className="w-72 text-start pl-2 italic">{tamu[0].meja}</td>
              </tr>
              <tr className="">
                <td className="text-left w-12">Pax</td>
                <td className="text-right w-8">:</td>
                <td className="w-72 text-start pl-2 italic">{tamu[0].pax}</td>
              </tr>
              <tr className="">
                <td className="text-left w-12">Pihak</td>
                <td className="text-right w-8">:</td>
                <td className="w-72 text-start pl-2 italic">
                  {tamu[0].kategori}
                </td>
              </tr>
            </table>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
