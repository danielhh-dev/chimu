import { useContext, useState } from "react";
import { NavLink, redirect } from "react-router-dom";
import FlechaAbajo from "../components/icons/FlechaAbajo";
import FlechaArriba from "../components/icons/FlechaArriba";
import { CartContext } from "../context/UseCartContext";
import { addDoc, collection, getFirestore} from 'firebase/firestore'

const OrderPage = () => { 
    const { cart, deleteToCart,addToCart,discountByOne } = useContext(CartContext);
    const [link,Setlink]= useState('')
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState(
        {
        nya: '',
        email:'',
        phone:'',
        adress:'',
        comments:'',
        pago:'',
        entrega:''
    })

    const order ={
        buyer:{
            nya: '',
            email:'',
            phone:'',
            adress:'',
            comments:'',
            pago:'',
            entrega:''
        },
        items: cart.map(product => ({
            id : product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity
        })),

        total: cart.reduce((acc,prod) => acc + (prod.price*prod.quantity), 0) ,
    }

    const handleChange = (e) => {setFormData( {...formData, [e.target.name]: e.target.value} )}

    const orderGenerate = (newOrder) =>{
        /* Intancia de firestore y referencia */
        const db = getFirestore()
        const ordersCollection = collection(db,'orders')

        /* Promesa para que guarde order en ordersCollection*/

        addDoc(ordersCollection,newOrder)
                                        .then(setShowForm(false))
                                        .catch( error => console.error("Error al realizar la compra"+error))
                                        
        
    }

    const sendData = async (e) => {
        e.preventDefault()
        await orderGenerate({...order,buyer:formData});
        setTimeout( () => {
            wappGenerate(order).then(res =>location.href = res )
            } , 2000 )

    }

    const wappGenerate = async (order) => { // esto me tiene que dar la url
        
    let msg = `Hola Chimu! Quiero hacer un pedido, este es el detalle:
    
Orden Nº PED-00006852
${new Date().toLocaleTimeString('en-US')}  ${new Date().toLocaleDateString()}
    
${order.items.map( item => {
    return(`
�${item.name}
    *Variantes*
    • ${item.quantity} x Modelo | $${item.price}
`
        )
    }).join('')}

*Forma de Entrega*
    • Método de Entrega: ${order.buyer.entrega}
    • Retira: ${order.buyer.nya}
    
*Forma de Pago*
    • Método de Pago: ${order.buyer.pago}
    
    • Total del Pedido: $ ${order.total}
`
    let orderText = encodeURIComponent(msg);
    
    let url = `https://api.whatsapp.com/send/?phone=549${order.buyer.phone}&text=${orderText}`;
    
    return url
    }

    return(
        <section className="w-[95%] mx-auto m-8 grid h-[60vh] md:h-[58vh] lg:h-full ">
            
        <div className="mx-4 rounded-md ">
            <h4 className="px-6 py-8 font-bold my-6 text-center text-3xl">Tu pedido</h4>
            {cart.map((item, index) => {
            
            return (
                <div key={index}>
                    <div className="w-full  border border-solid border-black"></div>

                    <div className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4">
                        <img src={item.image[0]} alt="" className="rounded-md" />

                        <div>
                            <h6 className="text-2xl font-bold">{item.name}</h6>
                            <div>
                                <span className="text-xl">Cantidad: {item.quantity}</span> <br />
                                <span className="text-xl">ARS {item.price}</span> <br></br>
                                <span className="text-xl">Diseño:</span>
                            </div>
                        </div>

                        <div className="pt-12 flex flex-col items-end">
                            
                            <div className="mx-4 mb-4   flex  w-40 flex-col md:col-span-2 md:mx-0  ">
                                <h6 className="col-span-2 text-xl">Cantidad</h6>
                                <div className="flex justify-center gap-11  rounded-lg bg-rosa-claro p-2">
                                    <span>{item.quantity}</span>
                                    <div className="flex flex-col gap-1 ">
                                        <button onClick={() => addToCart(item,1)}>
                                            <FlechaArriba />
                                        </button>
                                        <button onClick={() => discountByOne(item.id)}>
                                            <FlechaAbajo />
                                        </button>
                                    </div>
                                </div>
                            </div>
                                <button
                                    onClick={() => deleteToCart(item.id)}
                                    className ='text-xl'
                                >
                                Eliminar
                                </button>
                                <span className="font-bold text-xl">
                                    ARS{item.price * item.quantity}
                                </span>

                        </div>
                    </div>
                </div>
            );
            })}

            {cart.length == 0 ? (
            <span className="text-lg">
                No hay items,
                <NavLink className="underline " to="/category">
                ver productos
                </NavLink>
            </span>
            )
            :(
                <>
                <div className="w-full  border border-solid border-black my-2"></div>
            <div className="px-6 pb-8 pt-8">
                <span className="flex justify-end text-xl font-bold">
                Total: ${cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)}
                </span>
                <button onClick={()=>setTimeout(() => {setShowForm(true)}, 2000)} className="my-4 h-10 w-1/2 mx-auto text-xl rounded-lg bg-color-verde text-white md:col-span-2 md:w-1/3 grid items-center justify-center"  >Siguiente</button>
                
            </div>
                </>
            )}
        </div>
        { showForm &&
        <div>
        <h1 className="my-6 text-center text-3xl">Tus datos</h1>

        <form className="md:mx-50 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:mx-60 " onSubmit={sendData}>
            <div className="mb-4 flex w-[90%] flex-col ">
            <label> Nombre y apellido</label>
            <input
                className="h-16 divide-red-600 rounded-lg bg-rosa-claro"
                type="text"
                name="nya"
                placeholder="Juan Perez"
                value={formData.nya}
                onChange = {handleChange}
            />
            </div>

            <div className="mb-4 flex  w-[90%]  flex-col">
            <label> Email</label>
            <input
                className="h-16 rounded  bg-rosa-claro"
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange = {handleChange}
            />
            </div>

            <div className="mb-4 flex  w-[90%]  flex-col">
            <label>Telefono(Sin el 0)</label>
            <input
                className="h-16 rounded bg-rosa-claro"
                type="number"
                name="phone"
                id=""
                placeholder="Ingresa tu telefono"
                value={formData.phone}
                onChange = {handleChange}
            />
            </div>

            <div className="mb-4 flex  w-[90%]  flex-col">
            <label>Direccion de envio</label>
            <input
                className="h-16 rounded bg-rosa-claro"
                type="text"
                name="adress"
                id=""
                placeholder="Calle San Juan 896, Cordoba"
                value={formData.adress}
                onChange = {handleChange}
            />
            </div>

            <div className="mb-4 flex  w-[90%]  flex-col">
            <label>Forma de pago(Efectivo o mercado pago)</label>
            <input
                className="h-16 rounded bg-rosa-claro"
                type="text"
                name="pago"
                id=""
                placeholder="Efectivo o mercado pago"
                value={formData.pago}
                onChange = {handleChange}
            />
            </div>
            <div className="mb-4 flex  w-[90%]  flex-col">
            <label>Forma de entrega(Envio o retiro)</label>
            <input
                className="h-16 rounded bg-rosa-claro"
                type="text"
                name="entrega"
                id=""
                placeholder="Envio o retiro"
                value={formData.entrega}
                onChange = {handleChange}
            />
            </div>

            <div className="mb-4 flex  w-[90%]  flex-col md:col-span-2 md:w-[95%]">
            <label> Comentarios</label>
            <textarea
                className="h-24 rounded bg-rosa-claro"
                type="text"
                name="comments"
                id=""
                defaultValue='Dejanos un comentario'
                value={formData.comments}
                onChange = {handleChange}
            >
                
            </textarea>
            </div>
            <button type="submit"  className="my-6 h-10 w-1/2 text-xl rounded-lg bg-color-verde text-white md:col-span-2 md:w-1/3 grid items-center justify-center"  >Hacer pedido</button>
        </form>
        </div>
    }
        
        
        

    </section>
    )
}

export default OrderPage;


