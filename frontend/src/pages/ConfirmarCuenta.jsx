import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


export const ConfirmarCuenta = () => {

   const [alerta, setAlerta] = useState({});

   const params = useParams();
   const { id } = params;

   useEffect(() => {
     const confirmarCuenta = async() => {
       try {
         const url = `http://localhost:4000/api/usuarios/confirmar/${id}`
         const {data} = await axios(url)

         console.log(data);
        
       } catch (error) {
      
        console.log(error);
       }
     }
     confirmarCuenta();
   }, [])

  

  return (
    <>
    <h1 className=" text-sky-600 text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl">
    Confirm your account and start creating your <span className="my-4 text-slate-700">Projects</span>
    </h1>
    </>
  )
}
