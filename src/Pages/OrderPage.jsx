import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
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
        coments:'',
        pago:'',
        entrega:''
    })

    const order ={
        buyer:{
            nya: '',
            email:'',
            phone:'',
            adress:'',
            coments:'',
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
                                        .then(res => {
                                            
                                            setShowForm(false)
                                        })
                                        .catch( error => console.error("Error al realizar la compra"+error))
                                        /* .finally(()=>clear()) */
        wappGenerate(newOrder)
    }

    const sendData = (e) => {
        e.preventDefault()
        orderGenerate({...order,buyer:formData});
    }

    const wappGenerate = (order) => { // esto me tiene que dar la url
        
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
    let param = encodeURIComponent(msg);
    
    let url = `https://api.whatsapp.com/send/?phone=549${order.buyer.phone}&text=${param}`;
    console.log(url)
    Setlink(url)
    }

    return(
        <section className="w-[95%] mx-auto m-8 grid ">
            
        <div className="mx-4 rounded-md ">
            <h4 className="px-6 py-8 font-bold my-6 text-center text-3xl">Tu pedido</h4>
            {cart.map((item, index) => {
            
            return (
                <div key={index}>
                    <div className="w-full  border border-solid border-black"></div>

                    <div className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4">
                        <img src={item.image[0]} alt="" className="rounded-md" />

                        <div>
                            <h6>{item.name}</h6>
                            <div>
                                <span>Cantidad: {item.quantity}</span> <br />
                                <span>ARS {item.price}</span> <br></br>
                                <span>Monto</span>
                            </div>
                        </div>

                        <div className="pt-12 flex flex-col items-end">
                            
                            <div className="mx-4 mb-4   flex  w-40 flex-col md:col-span-2 md:mx-0  ">
                                <h6 className="col-span-2">Cantidad</h6>
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
                                >
                                Eliminar
                                </button>
                                <span className="font-bold">
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
            <div className="px-6 pb-8 pt-8">
                <span className="flex justify-end text-lg font-bold">
                Total: ${cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)}
                </span>
                <button onClick={()=>setTimeout(() => {setShowForm(true)}, 2000)} className="my-6 h-10 w-1/2 mx-auto text-xl rounded-lg bg-color-verde text-white md:col-span-2 md:w-1/3 grid items-center justify-center"  >Hacer compra</button>
                
            </div>
            
            )}
            
        </div>
        {showForm && 
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
                name="coments"
                id=""
                defaultValue='Dejanos un comentario'
                value={formData.coments}
                onChange = {handleChange}
            >
                
            </textarea>
            </div>
            <button type="submit"  className="my-6 h-10 w-1/2 text-xl rounded-lg bg-color-verde text-white md:col-span-2 md:w-1/3 grid items-center justify-center"  >Hacer pedido</button>
        </form>
        </div>}
        
        <a href={link} target= '_blank'>aaaaaa</a>
        

    </section>
    )
}

export default OrderPage;


