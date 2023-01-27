import { useContext } from 'react';
import {CartContext} from '../Context/UseCartContext';


const ProductDetail = ({objectProduct}) => {

    const {addToCart} = useContext(CartContext);
    return(
        <section className="container mx-auto px-4 mb-4">

                    <h2 className="font-bold text-2xl mb-3">{objectProduct.title}</h2>
                    <h4 className="mb-4">Descripcion</h4>
                    
                    <p className="mb-5">
                    {objectProduct.description}
                        <br></br>{objectProduct.measure}
                    </p>
                    <p className="mb-5 col-span-3"><span>ARS {objectProduct.price}</span></p>
                    
                    
                </section>
    )
}

export default ProductDetail;