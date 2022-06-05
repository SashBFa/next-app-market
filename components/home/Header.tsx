import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-neutral-900/60 -z-30"></div>
      <video
        loop
        autoPlay
        muted
        src="./img/header-video.mp4"
        className="w-full h-full object-cover fixed -z-50"
      />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
        <Image src="/img/logo.png" alt="logo" width={300} height={300} />
      </div>
    </header>
  );
};

export default Header;
