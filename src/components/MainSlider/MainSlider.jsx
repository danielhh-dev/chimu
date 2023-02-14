import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import gorras from "./images/gorras.jpg";
import soccer from "./images/soccer.jpg";
import vasos from "./images/vasos.jpg";

const featuredProducts = [gorras, soccer, vasos];
let count = 0;
let slideInterval;
const MainSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    "";
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="m- relative w-fit select-none md:-mt-4">
      <div className=" aspect-w-16 aspect-h-9 ">
        <img src={featuredProducts[currentIndex]} alt="" />
      </div>

      <div className="absolute top-1/2 flex w-full -translate-y-1/2 transform items-center justify-between px-3">
        <button onClick={handleOnPrevClick}>
          <IoIosArrowBack size={25} />
        </button>
        <button onClick={handleOnNextClick}>
          <IoIosArrowForward size={25} />
        </button>
      </div>
    </div>
  );
};
export default MainSlider;

/* En linea 56-58:
Podria poner un w-full en la imagen o flex justify-content en el div que la contiene pero se ve cortado
*/
