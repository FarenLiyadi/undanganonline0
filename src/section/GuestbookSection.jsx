import { useState } from "react";

export default function GuestbookSection() {
  const [message, setMessage] = useState("");
  const maxChars = 500;

  const wishes = [
    {
      name: "Fernando",
      time: "11 bulan, 2 minggu lalu",
      message: "Congrats april!",
    },
    {
      name: "Sarah",
      time: "8 bulan, 1 minggu lalu",
      message: "Selamat berbahagia!",
    },
    {
      name: "John",
      time: "6 bulan lalu",
      message: "Semoga bahagia selalu!",
    },
  ];

  return (
    <section className="bg-[#ffb3b3] text-center text-white py-8" id="wishes">
      <div className="container">
        <h2 className="font-vintage text-[50px]" data-aos="zoom-in">
          Guestbook
        </h2>

        <div
          className="rounded-xl bg-[#f5f3ee] font-roboto flex flex-col text-[#7b6945]"
          data-aos="zoom-in"
        >
          <p className="inline-flex items-center gap-1 px-4 py-2 font-semibold text-left">
            <i className="ri-message-fill"></i>
            {wishes.length} Ucapan
          </p>
          <hr className="w-full h-px bg-slate-900" />
          <form
            action=""
            className="mx-4 flex flex-col items-start text-[14px]"
          >
            <input
              type="text"
              name="nama"
              id="nama"
              placeholder="Nama"
              className="w-full p-1 px-2 mt-4 border border-slate-300"
            />
            <textarea
              name="ucapan"
              id="ucapan"
              placeholder="Ucapan"
              maxLength={maxChars}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-1 px-2 mt-4 border border-slate-300"
            ></textarea>
            <p className="ml-auto text-right text-slate-500">
              {maxChars - message.length}
            </p>
            <button
              type="submit"
              className="inline-flex mt-16 py-1 px-4 rounded text-white font-medium bg-[#7b6945]"
            >
              Kirim
            </button>
          </form>
          <div className="flex flex-col mt-4 border-t divide-y-2 border-t-slate-300">
            {/* Iterasi wish item */}
            {wishes.map((wish, index) => (
              <div key={index} className="flex gap-2 px-4 py-2">
                <img
                  src="/img/wish-profile.png"
                  className="w-[28px] aspect-square h-[28px]"
                />
                <div className="flex flex-col items-start w-full group">
                  <div className="items-center flex gap-1 text-[14px]">
                    <p className="font-bold">{wish.name}</p>
                    <i className="ri-checkbox-circle-fill"></i>
                  </div>
                  <p className="text-[11.2px] text-[#989692]">{wish.time}</p>
                  <p className="text-[14px] text-[#625b4f]">{wish.message}</p>
                  <button className="font-bold opacity-0 group-hover:opacity-100 text-[12px]">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="flex items-center gap-4 py-2 mx-auto font-medium">
            <a href="#" className="text-[#989692]">
              &larr; Previous
            </a>
            <a href="#" className="underline">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">Next &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
