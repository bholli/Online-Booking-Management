import React from "react";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";
import LogoSvgLight from "./LogoSvgLight";
import LogoSvg from "./LogoSvg";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Image from "next/image";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "w-auto",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      {img ? (
        <Image
          className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
          src={img}
          alt="Long Covid Clinics"
          title="Long Covid Clinics"
          width={48}
        />
      ) : (
        "Long Covid Clinics"
      )}
      {imgLight && (
        <Image
          className="hidden max-h-12 dark:block"
          src={imgLight}
          alt="Long Covid Clinics"
          title="Long Covid Clinics"
          width={48}
        />
      )}
    </Link>
  );
};

export default Logo;
