import InvitationOverlay from "./components/InvitationOverlay";
import Navbar from "./components/Navbar";
import CountdownSection from "./section/CountdownSection";
import CoupleSection from "./section/CoupleSection";
import EventSection from "./section/EventSection";
import FooterSection from "./section/FooterSection";
import GallerySection from "./section/GallerySection";
import GuestbookSection from "./section/GuestbookSection";
import HeroSection from "./section/HeroSection";
import PreweddingSection from "./section/PreweddingSection";
import ReservationSection from "./section/ReservationSection";
import StreamingSection from "./section/StreamingSection";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 768;
        return window.innerWidth < maxWidth;
      },
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  // <StreamingSection />
  return (
    <>
      <InvitationOverlay />
      <HeroSection />
      <CoupleSection />
      <EventSection />
      <CountdownSection />
      <GallerySection />
      <PreweddingSection />
      <GuestbookSection />
      <ReservationSection />
      <FooterSection />
      <Navbar />
    </>
  );
}
