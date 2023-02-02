import { useContext, useState } from 'react';
import { CartContext } from '../Context/UseCartContext';
import FlechaAbajo from '../icons/FlechaAbajo';
import FlechaArriba from '../icons/FlechaArriba';

const ItemCount = ({dataStock,dataDetail}) => {

    const [contador,setContador] = useState(1)

    const {addToCart} = useContext(CartContext)
    
    // aumenta contador
    const addNumber = () => {
        if(dataStock>contador){ 
        setContador(contador + 1)
        }
    }

    //disminuye contador
    const deleteNumber = () => {
        console.log(contador)
        if( contador!==1)
        setContador(contador - 1)
    }

    // agregar al carrito desde Detail
    const onAdd = () => {
        addToCart(dataDetail,contador)
    }
    
    return( 
        <>
            <button onClick={addNumber}> <FlechaArriba></FlechaArriba> </button>
            <p >{contador}</p>
            <button onClick={deleteNumber}> <FlechaAbajo></FlechaAbajo> </button>
            <button onClick={()=>onAdd()}> Agregar al carrito </button>
        </>
    )
} 


export default ItemCount