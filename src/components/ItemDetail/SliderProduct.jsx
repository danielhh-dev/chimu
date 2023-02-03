import { useState } from 'react';
import NextIcon from '../icons/NextIcon';
import PreviousIcon from '../icons/PreviousIcon';
import imgProduct2 from '../../assets/imagen-1.jpg';

import imgProduct1 from '../../assets/imagen-5.jpg';

import imgProduct3 from '../../assets/imagen-2.jpg';
import imgProduct4 from '../../assets/imagen-3.jpg';
import imgProduct5 from '../../assets/imagen-4.jpg';

const ARRAY_IMGS = [imgProduct1,imgProduct3,imgProduct4,imgProduct5]; /* Esto queda afuera porque no quiero que se renderice de nuevo */

const SliderProduct = () => {

    const [index,setIndex] = useState(0);

    const handleClickNext = () => {
        
        if(index === ARRAY_IMGS.length - 1){
            setIndex(0);
        }else{
            setIndex(index+1)
        }
    }

    const handleClickPrev = () => {
        if(index === 0){
            setIndex(ARRAY_IMGS.length-1);
        }else{

            setIndex(index-1)
        }
    }

    return(
        <section className="grid md:gap-4">
            
            <div className='relative'>
                
                <div className='absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-2 '>
                    <button onClick={handleClickPrev} className='grid h-10 w-10 place-items-center'><PreviousIcon/></button>
                    <button onClick={handleClickNext} className='grid h-10 w-10 place-items-center'><NextIcon/></button>
                </div>
                
                <img src={ARRAY_IMGS[index]} alt='img' className='aspect-[16/14] w-full md:aspect-[12/20] xl:aspect-[16/16]'></img>
                
            </div>
            
        </section>
    )
}

export default SliderProduct;

/* aspect-[16/14] w-full md:aspect-[12/20] xl:aspect-[16/16] , podria agregar object-cover */

