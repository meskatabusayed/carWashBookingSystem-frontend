// import FeaturedServices from "@/components/home/FeaturedServices";
// import HeroSection from "@/components/home/HeroSection";
// import Reviews from "@/components/home/Reviews";

import { MdReviews } from "react-icons/md";
import FeaturedServices from "../components/home/FeaturedServices";
import HeroSection from "../components/home/HeroSection";

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <MdReviews />
    </>
  );
};

export default HomeView;