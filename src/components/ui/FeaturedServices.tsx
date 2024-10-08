/* eslint-disable @typescript-eslint/no-explicit-any */
/* our feature */

import Autoplay from "embla-carousel-autoplay";
import { ArrowRightIcon, CheckIcon, ClockIcon } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import SectionHeading from "./sectionHeading";

import { addServiceToCompare } from "../../redux/features/service/serviceComparison.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Button } from "./button";
import { TFeaturedService, serviceData } from "../../mock/service";

const FeaturedServices = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();

  const { selectedServices } : any = useAppSelector((state) => state?.comparison);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full  py-[70px] px-[20px] bg-[#1E1E1E]">
      <SectionHeading
        description="Top 6 populer offer to chose from use. Best featured services"
        heading="Our top featured services"
        slogan="Our services"
      />
      <Carousel
        setApi={setApi}
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
                     {current} of {count} 
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
                   <Button
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
                  </Button> 
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