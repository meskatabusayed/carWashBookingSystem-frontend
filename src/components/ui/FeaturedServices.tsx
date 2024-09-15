// import { useState } from "react";
// import ServiceCard from "./ServiceCard";

// const FeaturedServices = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedVehicleType, setSelectedVehicleType] = useState("All");

//   const categories = ["All", "WASH & WAX", "DETAILING", "MAINTENANCE"];
//   const vehicleTypes = [
//     "All",
//     "Hatchback",
//     "Sedan/Wagon",
//     "Luxury Sedan",
//     "Crossover SUV",
//   ];

//   const services = [
//     {
//       title: "EXPRESS CAR WASH",
//       price: "BDT 600",
//       duration: "25 Minutes",
//       description: "See what's included",
//       linkText: "See what's included",
//       link: "/services/express-car-wash",
//       category: "WASH & WAX",
//       vehicleType: "Hatchback",
//     },
//     {
//       title: "EXPRESS CAR WASH & WAX",
//       price: "BDT 1400",
//       duration: "1 hour 15 mins",
//       description: "See what's included",
//       linkText: "See what's included",
//       link: "/services/express-car-wash-wax",
//       category: "WASH & WAX",
//       vehicleType: "Sedan/Wagon",
//     },
//     {
//       title: "DELUXE CAR WASH & WAX",
//       price: "BDT 1600",
//       duration: "1 hour 30 mins",
//       description: "See what's included",
//       linkText: "See what's included",
//       link: "/services/deluxe-car-wash-wax",
//       category: "WASH & WAX",
//       vehicleType: "Sedan/Wagon",
//     },
//     {
//       title: "PREMIUM CAR WASH & WAX",
//       price: "BDT 1800",
//       duration: "1 hour 45 mins",
//       description: "See what's included",
//       linkText: "See what's included",
//       link: "/services/premium-car-wash-wax",
//       category: "WASH & WAX",
//       vehicleType: "SUV",
//     },
//     {
//       title: "ULTIMATE CAR WASH & WAX",
//       price: "BDT 2000",
//       duration: "2 hours",
//       description: "See what's included",
//       linkText: "See what's included",
//       link: "/services/ultimate-car-wash-wax",
//       category: "WASH & WAX",
//       vehicleType: "SUV",
//     },
//     {
//       title: "BASIC CAR WASH & WAX",
//       price: "BDT 1200",
//       duration: "1 hour",
//       description: "See what's included",
//       linkText: "See what's included",
//       link: "/services/basic-car-wash-wax",
//       category: "WASH & WAX",
//       vehicleType: "Sedan/Wagon",
//     },
//   ];

//   const filteredServices = services.filter(
//     (service) =>
//       (selectedCategory === "All" || service.category === selectedCategory) &&
//       (selectedVehicleType === "All" ||
//         service.vehicleType === selectedVehicleType)
//   );

//   return (
// <section
//   className="relative min-h-screen w-full bg-cover bg-center flex flex-col justify-center items-center py-10 lg:py-16"
//   style={{
//     backgroundImage:
//       "url('https://i.ibb.co/Z6z7zH2/man-cleaning-red-sports-car-with-power-washer-rainy-afternoon-garage-area-1090747-488.jpg')",
//   }}
// >
//   <div className="absolute inset-0 bg-black opacity-80"></div>
//   <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//     {/* Category Section */}
//     <div className="mb-8 space-y-4">
//       <div className="flex justify-center mb-4 gap-2">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`lg:px-4 px-2 lg:text-base text-[8px] py-1 lg:py-2 rounded-full border-2 ${
//               selectedCategory === category
//                 ? "bg-green-500 text-white"
//                 : "text-green-500 border-green-500"
//             } transition duration-300`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="flex justify-center gap-2">
//         {vehicleTypes.map((type) => (
//           <button
//             key={type}
//             onClick={() => setSelectedVehicleType(type)}
//             className={`lg:px-4 px-2 lg:text-base text-[8px] py-1 lg:py-2 rounded-full border-2 ${
//               selectedVehicleType === type
//                 ? "bg-green-500 text-white"
//                 : "text-green-500 border-green-500"
//             } transition duration-300`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>
//     </div>
//     {/* Service Cards */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {filteredServices.map((service, index) => (
//         <ServiceCard
//           key={index}
//           title={service.title}
//           price={service.price}
//           duration={service.duration}
//           description={service.description}
//           linkText={service.linkText}
//           link={service.link}
//         />
//       ))}
//     </div>
//   </div>
// </section>

//   );
// };

// export default FeaturedServices;

/* our feature */

import Autoplay from "embla-carousel-autoplay";
import { /*ArrowRightIcon,*/ CheckIcon, ClockIcon } from "lucide-react";
//import { useEffect, useState } from "react";
import {
  Carousel,
  //CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import SectionHeading from "./sectionHeading";

// import { addServiceToCompare } from "../../redux/features/service/serviceComparison.slice";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { Button } from "./button";
import { TFeaturedService, serviceData } from "../../mock/service";

const FeaturedServices = () => {
  // const [api, setApi] = useState<CarouselApi>();
  // const [current, setCurrent] = useState(0);
  // const [count, setCount] = useState(0);
  // const dispatch = useAppDispatch();

  // const { selectedServices } = useAppSelector((state) => state?.comparison);

  // useEffect(() => {
  //   if (!api) return;

  //   setCount(api.scrollSnapList().length);
  //   setCurrent(api.selectedScrollSnap() + 1);

  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1);
  //   });
  // }, [api]);

  return (
    <div className="w-full  py-[70px] px-[20px]">
      <SectionHeading
        description="Top 6 populer offer to chose from use. Best featured services"
        heading="Our top featured services"
        slogan="Our services"
      />
      <Carousel
        //setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="mt-[20px]"
      >
        <CarouselContent>
          {serviceData.map((data: TFeaturedService) => (
            <CarouselItem key={data.name}>
              <div className="flex layout_container !px-[0] mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex-row flex-col">
                <div className="w-full md:w-1/2 relative">
                  <img
                    src={data.image}
                    alt="Service Image"
                    className="object-cover w-full h-full"
                    width="640"
                    height="512"
                    style={{ aspectRatio: "640/512", objectFit: "cover" }}
                  />
                  <div className="absolute center gap-[5px] bottom-4 left-1/2 flex items-center">
                    <CarouselNext className="text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                      &#9654;
                    </CarouselNext>
                    <span className="text-white font-[800]">
                    {/* {current} of {count} */}
                    </span>

                    <CarouselPrevious className="text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                      &#9664;
                    </CarouselPrevious>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
                  <div className="flex items-center mb-4">
                    <ClockIcon className="h-5 w-5 text-red-500" />
                    <span className="ml-2 text-gray-700">
                      {data.duration} min
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{data.description}</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-black" />
                      <span className="ml-2 text-gray-700">Seats washing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-black" />
                      <span className="ml-2 text-gray-700">
                        Vacuum cleaning
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-black" />
                      <span className="ml-2 text-gray-700">
                        Interior wet cleaning
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-black" />
                      <span className="ml-2 text-gray-700">Window wiping</span>
                    </li>
                  </ul>
                  {/* <Button
                    className={`${
                      selectedServices.includes(data)
                        ? "bg-black"
                        : "bg-red-500"
                    } text-white px-6 py-3 rounded-full`}
                    onClick={() => dispatch(addServiceToCompare(data))}
                  >
                    {selectedServices.includes(data)
                      ? "Remove from Compare"
                      : "Add to Compare"}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button> */}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FeaturedServices;