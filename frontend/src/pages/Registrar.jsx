import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Alerta} from '../components/Alerta';
import axios from 'axios';

export const Registrar = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')
    const [alerta, setAlerta] = useState({})
    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, email, password, repetirPassword].includes('')){
            setAlerta({
                msg: 'All fields are required',
                error: true
            })
            return
        }

        if (password !== repetirPassword) {
            setAlerta({
                msg: 'Passwords do not match',
                error: true
            })
            return
        }

        if (password.length < 6) {
            setAlerta({
                msg: 'The password is too short, add at least 6 characters.',
                error: true
            })
            return
        }

        setAlerta({});

        // Crear el usuario en la API
        try {
            const {data}= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios`, {nombre, email, password})
            setAlerta({
                msg: data.msg,
                error: false,
            })

            setNombre('')
            setEmail('')
            setPassword('')
            setRepetirPassword('')
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true,
            })
        }
    }

    const {msg} = alerta;

  return (
    <>
      <h1 className=" text-sky-600 text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl">
        Create An Account With <span className="my-4 text-slate-700">TidyDay</span>
        </h1>

        {msg && <Alerta alerta={alerta} />}

      <form 
          className="my-10 bg-white shadow rounded-lg p-10"
          onSubmit={handleSubmit}
      >
        <h2 className=" text-center scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0">Create an account</h2>
        <div className="my-5">
            <label 
                className="text-lg font-semibold"
                htmlFor="nombre"
            >Full Name</label>
            <input
                id="nombre"
                type="text"
                placeholder="Pepito Perez"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
            />
        </div>
        <div className="my-5">
            <label 
                className="text-lg font-semibold"
                htmlFor="email"
            >Email</label>
            <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div className="my-5">
            <label 
                className="text-lg font-semibold"
                htmlFor="password"
            >Password</label>
            <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </div>
        <div className="my-5">
            <label 
                className="text-lg font-semibold"
                htmlFor="password2"
            >Repeat Password</label>
            <input
                id="password2"
                type="password"
                placeholder="********"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={repetirPassword}
                onChange={e => setRepetirPassword(e.target.value)}
            />
        </div>
        <input 
            type="submit"
            value="Create an account"
            className="w-full mb-5 py-3 bg-sky-700 hover:cursor-pointer hover:bg-sky-800 transition-colors rounded-xl  text-white text-lg font-semibold"
        />
       
        </form>
        <nav className="lg:flex lg:justify-between" >
            <Link
                className=" block text-center my-5 text-slate-500 text-sm"
                to="/"
            >
                Already have an account? <span className='text-sky-600' >Log In</span>
            </Link> 
            
            <Link
                className="block  my-5 text-slate-500 text-center text-sm"
                to="/olvide-password"
            >Forgot my password</Link> 
           
        </nav>   

        
    </>
  )
}
