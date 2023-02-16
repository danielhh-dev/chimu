import { useState } from "react";
import NextIcon from "../../components/icons/NextIcon";
import PreviousIcon from "../../components/icons/PreviousIcon";

const SliderProduct = ( {images} ) => {
  const [index, setIndex] = useState(0);

  const handleClickNext =  () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleClickPrev =  () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <section className="grid md:gap-4">
      <div className="relative">
        <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-2 ">
          <button
            onClick={ handleClickPrev}
            className="grid h-10 w-10 place-items-center"
          >
            <PreviousIcon />
          </button>
          <button
            onClick={handleClickNext}
            className="grid h-10 w-10 place-items-center"
          >
            <NextIcon />
          </button>
        </div>

        <img
          src={images[index]}
          alt="img"
          className="aspect-[16/14] w-full md:aspect-[12/20] xl:aspect-[16/16]"
        ></img>
      </div>
    </section>
  );
};

export default SliderProduct;

/* aspect-[16/14] w-full md:aspect-[12/20] xl:aspect-[16/16] , podria agregar object-cover */