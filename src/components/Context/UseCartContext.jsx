import { createContext, useState } from "react"

export const CartContext = createContext();

const UseCartContext = ({children}) => {
    
    const [cart, setCart] = useState([])
    
    /* ------------------------------------Agregar al carrito------------------------------ */
    const addToCart = (dataProduct,contador) => {

        const item = cart.find( prod => prod.id === dataProduct.id ) // se crea si el elemento ya esta en el carrito
            
        if(item){  // existe item?
            if(contador > 1){ // ademas, me esta llegando una cantidad seleccionada
                item.quantity+=contador; // entonces a la cantidad de mi producto(que ya esta en el carrito) le sumo la cantidad seleccionada
            }
            else{ // si no me estaa llegando una cantidad seleccionada => aumento en uno la cantidad de mi producto
                item.quantity++
                setCart([...cart]) // para que se actualice la cantidad
            }
        }
        else{ // NO existe item(no esta en el carrito)
            if(!contador){ // ademas, no existe contador(no hay una cantidad seleccionada)
                setCart([...cart,dataProduct]) // entonces se agrega el producto con cantidad 1 y lo que ya esta en el carro
            }
            else{ // si hay contador y ademas el producto no esta en carrito 
                dataProduct.quantity = contador // la cantidad de mi producto va a ser igual a la cantidad seleccionada que me esta llegadndo
                setCart([...cart,dataProduct]) // ent0nces se agrega el porducto con la nueva cantidad y lo que esta en el carro
            }
        }
    }

    const deleteToCart = (idProd) => {
        const itemToDelete = cart.find( prod => prod.id === idProd );

        if(itemToDelete.quantity != 1){
            itemToDelete.quantity--; 
            console.log(`Cantidad en carro: ${itemToDelete.quantity}`)               
            setCart([...cart]) // aca solo seteo el cart porque cuando modifique la cantidad se va actualizar en carrito ; va entre parentesis porque ...cart devuelve los elementos sueltos y yo los necesito en un array
        }else{
            setCart(cart.filter( prod => prod.id !== itemToDelete.id))
        }
    }

    const clear = () => setCart([])

    const dataProvide = {
        cart,
        setCart,
        addToCart,
        deleteToCart,
        clear
    }
    
    return(
        <CartContext.Provider value={dataProvide}>
            {children}
        </CartContext.Provider>
    )
}

export default UseCartContext;

