import { useEffect, useState } from "react";

const Navigation = () => {
  const [show, setShow] = useState(true);
  let oldScroll = 0;

  const controlNavigation = () => {
    if (window.scrollY < 200) {
      setShow(true);
    } else if (window.scrollY >= 200) {
      let newScroll = window.scrollY;
      oldScroll < newScroll ? setShow(false) : setShow(true);
      oldScroll = newScroll <= 0 ? 0 : newScroll;
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavigation);
    return () => {
      window.removeEventListener("scroll", controlNavigation);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={`fixed w-full  text-white transition-all duration-1000 ease-in-out bg-primary ${
        show ? "opacity-100 top-0" : "opacity-0 -top-1"
      }`}
    >
      <div className="max-w-screen-2xl mx-3 sm:mx-6 lg:mx-9 xl:mx-12 2xl:mx-auto">
        <h2>Navigation</h2>
      </div>
    </nav>
  );
};

export default Navigation;
