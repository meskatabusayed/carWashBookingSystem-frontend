import { Carousel } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

// Style for carousel content
const contentStyle: React.CSSProperties = {
  color: "#fff",
  textAlign: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
};


const HeroCarousel = () => {
  const navigate = useNavigate();

  return (
    <section className="relative mb-0">
      <Carousel autoplay dotPosition="bottom" arrows infinite={false}>
        {/* Slide 1 */}
        <div>
          <div
            className="h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh]" 
            style={{
              ...contentStyle,
              backgroundImage:
                "url('https://i.ibb.co/TrTXYMP/branding-section-1.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-[#1E1E1E] opacity-50"></div> 
            <div className="relative text-center z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6">
              Premium Quality Services
              </h1>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto font-serif">
              PH cleaning transforms car care with effortless online booking, exceptional quality, and a commitment to making your vehicle look brand new—every time.
              </p>
              <button
                onClick={() => navigate("/services")}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-[#1877F2] text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:bg-[#1877F2] transition duration-300"
              >
                Book Service
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div
            className="h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh]" 
            style={{
              ...contentStyle,
              backgroundImage:
                "url('https://i.ibb.co/yN3dZqx/branding-section-3.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6">
              Fully Automated System
              </h1>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto font-serif">
              PH cleaning transforms car care with effortless online scheduling, exceptional services, and a dedication to ensuring your vehicle looks pristine every time.
              </p>
              <button
                onClick={() => navigate("/services")}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-[#1877F2] text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:bg-[#1877F2] transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div>
          <div
            className="h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh]" 
            style={{
              ...contentStyle,
              backgroundImage:
                "url('https://i.ibb.co/TrTXYMP/branding-section-1.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6">
              Car wash services with hassle-free online booking.
              </h1>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto font-serif">
              With PH cleaning, experience simplified car maintenance through easy online scheduling, superior services, and a commitment to making your vehicle shine like new every time.
              </p>
              <button
                onClick={() => navigate("/services")}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-[#1877F2] text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:bg-[#1877F2] transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        {/* <div>
          <div
            className="h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh]"
            style={{
              ...contentStyle,
              backgroundImage:
                "url('https://i.ibb.co/6FxgfHh/car-wash-expert-using-water-pressure-washer-clean-red-modern-sportscar-generated-by-ai-1020649-507.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6">
                Quality Detailing Services
              </h1>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto font-serif">
                Make your car shine like new.
              </p>
              <button
                onClick={() => navigate("/services")}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div> 
        </div>*/}
        {/* Add more */}
      </Carousel>
    </section>
  );
};

export default HeroCarousel;