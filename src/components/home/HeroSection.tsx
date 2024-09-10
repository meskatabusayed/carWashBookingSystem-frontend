import Autoplay from "embla-carousel-autoplay";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
export const RenderNewLine = ({ text }: { text: string }) => {
  return text.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
};
const HeroSection = () => {
  const sliderData = [
    {
      id: 3,
      image: "https://i.ibb.co/TrTXYMP/branding-section-1.jpg",
      heading: "Car wash services with hassle-free online booking.",
      desc: "With PH cleaning, experience simplified car maintenance through easy online scheduling, superior services, and a commitment to making your vehicle shine like new every time.",
    },
    {
      id: 1,
      image: "https://i.ibb.co/nwnRYL3/branding-section-2.jpg",
     heading: "Premium Quality Services",
      desc: "PH cleaning transforms car care with effortless online booking, exceptional quality, and a commitment to making your vehicle look brand new—every time.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/yN3dZqx/branding-section-3.jpg",
     heading: "Fully Automated System",
      desc: "PH cleaning transforms car care with effortless online scheduling, exceptional services, and a dedication to ensuring your vehicle looks pristine every time.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel
        className="overflow-hidden lg:h-screen h-[400px]"
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="flex text-center">
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="min-w-full">
              <Card className="bg-transparent rounded-none border-none shadow-none">
                <CardContent className="flex items-center justify-center h-full p-0 w-full">
                  <div
                    className="relative w-full lg:h-screen h-[400px] overflow-hidden"
                    style={{ transition: "0.3s" }}
                  >
                    <div className="overlay" />
                    <img
                      src={slider.image}
                      className="absolute z-[1]  top-0 left-0 h-full w-full object-cover ani_image"
                      alt=""
                    />

                    <div className="relative z-[21] w-full h-full  flex-col center pl-[50px] bg-[#00000011] gap-[5px]">
                      {/* <h4 className="text-center font-[700] uppercase hero_title text-white tracking-[7px]">
                        top class cleaning
                      </h4> */}
                      <h1 className="text-[20px] sm:text-[30px] hero_title lg:text-[90px] font-[700] text-white capitalize">
                        <RenderNewLine text={slider.heading} />
                      </h1>
                      <p className="max-w-[550px] text-white text-center  text-[12px] sm:text-[14px] lg:text-[16px]">
                        {slider.desc}
                      </p>
                      <div className="center gap-[10px]">
                        <Link
                          to={"/services"}
                          className="center gap-[5px] px-[20px] py-[8px] md:px-[40px] md:py-[12px] rounded-full bg-primaryMat/80 text-white mt-[20px] text-[15px] md:text-[25px]"
                        >
                          Book a Slot <MdArrowForwardIos />
                        </Link>
                        <Link
                          to={"/"}
                          className="center gap-[5px] px-[20px] py-[8px] md:px-[40px] md:py-[12px] rounded-full bg-white text-primaryMat mt-[20px] text-[15px] md:text-[25px]"
                        >
                          Explore <MdArrowForwardIos />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9664;
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9654;
        </CarouselNext>
      </Carousel>
    </div>
  );
};
export default HeroSection;