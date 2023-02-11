import { createContext, useState } from "react";

export const CartContext = createContext();

const UseCartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  /* ------------------------------------Agregar al carrito------------------------------ */
  const addToCart = (dataProduct, contador) => {
    
    const item = cart.find((prod) => prod.id === dataProduct.id); // se crea si el elemento ya esta en el carrito
    
    if (item) {
      item.quantity += contador;
      setCart([...cart])
    } else {
      dataProduct.quantity = contador;
      setCart([...cart, dataProduct]);
    }
  };

  const deleteToCart = (idProd) => {
    const itemToDelete = cart.find((prod) => prod.id === idProd);

    if (itemToDelete.quantity != 1) {
      itemToDelete.quantity--;
      console.log(`Cantidad en carro: ${itemToDelete.quantity}`);
      setCart([...cart]); // aca solo seteo el cart porque cuando modifique la cantidad se va actualizar en carrito ; va entre parentesis porque ...cart devuelve los elementos sueltos y yo los necesito en un array
    } else {
      setCart(cart.filter((prod) => prod.id !== itemToDelete.id));
    }
  };

  const clear = () => setCart([]);

  const discountByOne = (prodId) => {
      const itemInCart = cart.find(prod => prod.id == prodId)
        
      if(itemInCart.quantity === 1){
          setCart(cart.filter( prod => prod.id !== itemInCart.id))
      }
      else{
          itemInCart.quantity--;               
          setCart([...cart]) // aca solo seteo el cart porque cuando modifique la cantidad se va actualizar en carrito
      }
  }

  const dataProvide = {
    cart,
    setCart,
    addToCart,
    deleteToCart,
    clear,
    discountByOne
  };

  return (
    <CartContext.Provider value={dataProvide}>{children}</CartContext.Provider>
  );
};

export default UseCartContext;