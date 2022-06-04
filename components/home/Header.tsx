import React from "react";

const Header = () => {
  return (
    <header className="w-full h-96 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-neutral-900/60"></div>
      <video
        loop
        autoPlay
        muted
        src="./img/header-video.mp4"
        className="w-full h-full object-cover bottom-52 sm:bottom-72 2xl:bottom-96 fixed -z-50"
      />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
        <h1>Welcome</h1>
        <p>Into my site</p>
      </div>
    </header>
  );
};

export default Header;
