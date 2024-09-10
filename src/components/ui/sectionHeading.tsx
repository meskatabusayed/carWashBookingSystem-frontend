import React from "react";

interface IProps {
  slogan: string;
  heading: string;
  description: string;
}

const SectionHeading: React.FC<IProps> = ({ slogan, heading, description }) => {
  return (
    <div className="w-full flex-col gap-[4px] center">
      <h4 className="text-center font-[700] uppercase hero_title text-black tracking-[7px]">
        {slogan}
      </h4>
      <h2 className="text-[55px] text-black font-[500] hero_title capitalize">
        {heading}
      </h2>
      <p className="text-black text-[15px]">{description}</p>
    </div>
  );
};

export default SectionHeading;