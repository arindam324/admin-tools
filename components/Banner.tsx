import React from "react";
import Image from "next/image";

type Xposition = "left" | "center" | "right";
type YPosition = "top" | "bottom" | "center";

type FontFamily = "Inter" | "sans-serrif" | "Lato" | "Roboto";

type BannerProps = {
  background: "color" | "image";
  bg?: string;
  borderRadius?: number;
  heading: string;
  padding?: number;
  headingXposition?: Xposition;
  headingYposition?: YPosition;
  src?: string;
  imageXposition?: Xposition;
  imageYposition?: YPosition;
  fontFamily?: FontFamily;
};

const Banner = ({
  heading,
  padding,
  background,
  bg,
  headingXposition,
  headingYposition,
  imageXposition,
  imageYposition,
  borderRadius,
  src,
  fontFamily,
}: BannerProps) => {
  const returnYPosition = (Yposition: YPosition) => {
    switch (Yposition) {
      case "top":
        return "justify-self-start";
      case "bottom":
        return "justify-self-end";
      case "center":
        return "justify-self-center";

      default:
        return "";
    }
  };

  const getFontFamily = () => {
    switch (fontFamily) {
      case "Inter":
        return "font-Inter";
      case "sans-serrif":
        return "font-serrif";
      case "Lato":
        return "font-Lato";
      case "Roboto":
        return "font-Roboto";
      default:
        return "";
    }
  };

  const returnXposition = (Xposition: Xposition) => {
    switch (Xposition) {
      case "left":
        return "self-start";
      case "right":
        return "self-end";
      case "center":
        return "self-center";
      default:
        return "";
    }
  };

  return (
    <div
      className="w-full h-[500px] grid grid-cols-8 grid-rows-5"
      style={{
        background: background === "color" ? bg : "",
        borderRadius: borderRadius,
        padding: padding,
      }}
    >
      <h2
        className={`text-4xl col-span-full row-span-full  font-bold ${
          fontFamily && getFontFamily()
        }   ${headingYposition && returnYPosition(headingYposition)} ${
          headingXposition && returnXposition(headingXposition)
        }`}
      >
        {heading}
      </h2>
      <div
        className={`col-span-full row-span-full  ${
          imageYposition && returnYPosition(imageYposition)
        } ${imageXposition && returnXposition(imageXposition)}  `}
      >
        {src && <Image src={src} width={300} height={300} />}
      </div>
    </div>
  );
};

export default Banner;
