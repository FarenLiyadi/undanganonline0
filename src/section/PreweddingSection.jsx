import GiftCard from "../components/GiftCard";

export default function PreweddingSection() {
  return (
    <section className="bg-[#ffb3b3] py-4 text-white text-center pb-8">
      <div className="container">
        {/*<h2 className="font-vintage text-[46px]" data-aos="zoom-in">
          Pre - Wedding
        </h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KW4GTKEM40s?si=zJ5pxsGRiBtXxuU6"
          title="YouTube video player"
          className="w-full h-auto aspect-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          data-aos="zoom-in"
        ></iframe>*/}
        <div className="p-8 border border-white rounded-2xl md:border-none md:p-0">
          <h2 className="mt-2 font-vintage text-[46px]" data-aos="zoom-in">
            Wedding Gift
          </h2>
          <div className="flex flex-col gap-0 md:grid md:grid-cols-2 md:gap-6">
            <GiftCard
              accountName={"Faren Liyadi"}
              accountNumber={7685444020}
              type="Mandiri"
            />
            <GiftCard
              accountName={"Faren Liyadi"}
              accountNumber={7685444020}
              type="BCA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
