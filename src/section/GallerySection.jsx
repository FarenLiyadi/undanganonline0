import Gallery from "../components/Gallery";

export default function GallerySection() {
  return (
    <section
      className="py-8 relative overflow-hidden bg-[#ffb3b3]"
      id="gallery"
    >
      <div className="container">
        <p
          className="font-vintage text-[50px] leading-none text-center text-white"
          data-aos="zoom-in"
        >
          Best Moment
        </p>
        <hr
          className="h-[2px] bg-white mx-auto w-[10%] my-8"
          data-aos="zoom-in"
        />
        <Gallery />
      </div>
    </section>
  );
}
