import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsBottom(
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-[#ffb3b3]">
      <nav
        className={`${
          isMobile
            ? isBottom
              ? "relative w-full"
              : "fixed bottom-0 left-1/2 transform -translate-x-1/2 w-auto px-4"
            : "relative w-full"
        } 
        p-4 z-50 flex gap-2 md:gap-10 rounded-t-2xl items-center shadow-lg bg-[#ffb3b3] text-white justify-center transition-all duration-300 ease-in-out`}
      >
        <a href="#home" className="flex flex-col items-center px-2">
          <i className="ri-home-4-fill text-[24px] md:text-[54px] leading-none mb-2"></i>
          <span className="text-[12px] md:text-[20px] leading-none">Home</span>
        </a>
        <a href="#couple" className="flex flex-col items-center px-2">
          <i className="ri-heart-pulse-fill text-[24px] md:text-[54px] leading-none mb-2"></i>
          <span className="text-[12px] md:text-[20px] leading-none">
            Couple
          </span>
        </a>
        <a href="#event" className="flex flex-col items-center px-2">
          <i className="ri-calendar-todo-fill text-[24px] md:text-[54px] leading-none mb-2"></i>
          <span className="text-[12px] md:text-[20px] leading-none">Event</span>
        </a>
        <a href="#gallery" className="flex flex-col items-center px-2">
          <i className="ri-gallery-line text-[24px] md:text-[54px] leading-none mb-2"></i>
          <span className="text-[12px] md:text-[20px] leading-none">
            Gallery
          </span>
        </a>
        <a href="#wishes" className="flex flex-col items-center px-2">
          <i className="ri-message-2-line text-[24px] md:text-[54px] leading-none mb-2"></i>
          <span className="text-[12px] md:text-[20px] leading-none">
            Wishes
          </span>
        </a>
      </nav>
    </footer>
  );
}
