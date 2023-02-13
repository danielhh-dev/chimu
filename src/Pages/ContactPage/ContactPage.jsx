import { useState } from "react";
import { addDoc, collection, getFirestore} from 'firebase/firestore'

const ContactPage = () => {
  const [link,setLink]= useState(``)

  const [formData, setFormData] = useState(
    {
    nya: '',
    email:'',
    phone:'',
    comments:'',
    product:''
})

const handleChange = (e) => {setFormData( { ...formData ,[e.target.name]: e.target.value } )

console.log('a',formData)
}
const query ={
  person:{
      nya: '',
      email:'',
      phone:'',
      coments:'',
      product:''
  }
}

const queryGenerate = (newQuery) =>{
  /* Intancia de firestore y referencia */
  const db = getFirestore()
  const ordersCollection = collection(db,'queries')

  /* Promesa para que guarde order en ordersCollection*/

  addDoc(ordersCollection,newQuery)

}

const sendData = async (e) => {
  e.preventDefault()
  await queryGenerate({...query,person:formData});
  
  
  setTimeout( () => {
    wappGenerate({...query,person:formData}).then(res =>location.href = res )
    } , 2000 )
}

const wappGenerate = async (query) => { // esto me tiene que dar la url
        
  let msg = `Hola Chimu! Quiero hacer una consulta:
  
Consulta Nº PED-00006852
${new Date().toLocaleTimeString('en-US')}  ${new Date().toLocaleDateString()}

Nombre y apellido: ${query.person.nya}
Email: ${query.person.email}
Telefono: ${query.person.phone}
Producto: ${query.person.product}
Consulta: ${query.person.comments}
`
  let orderText = encodeURIComponent(msg);
  
  let url = `https://api.whatsapp.com/send/?phone=5492302554639&text=${orderText}`;
  
  
  return url
  
  }



  return (
    <section className="">
      <h1 className="my-6 text-center text-3xl">Contacto</h1>
      <p className="hidden md:my-8 md:flex md:justify-center">
        Si estás buscando un diseño personalizado. Dejanos tus datos de contacto
        para poder brindarte lo mejor.
      </p>

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
          <label> Producto</label>
          <input
            className="h-16 rounded bg-rosa-claro"
            type="text"
            name="product"
            id=""
            placeholder="Taza de polimero"
            value={formData.product}
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
            
            value={formData.comments}
            onChange = {handleChange}
          >
            
          </textarea>
        </div>
        <button type="submit" className="my-6 h-10 w-1/2 rounded-lg bg-color-verde text-white md:col-span-2 md:w-1/3">
          Enviar
        </button>
      </form>

      <div className=""></div>
    </section>
  );
};

export default ContactPage;
