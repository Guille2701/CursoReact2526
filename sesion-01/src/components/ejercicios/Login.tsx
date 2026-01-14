import React, { useState } from 'react'


interface Usuario {
    email:string,
    password:string
    check:boolean
}

const Login = () => {

    const [usuario, setUsuario] = useState<Usuario>({email:"", password:"",check:false})
    //const [showPass, setShowPass] = useState<boolean>(false)

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        
        if (usuario.email === "" || usuario.password === "") {
            alert("Los campos no pueden estar vacíos");
            return;
        }

        if (!filtroEmail.test(usuario.email)) {
            alert("Email no válido");
            return;
        }

        if (!filtroPass.test(usuario.password)) {
            alert("La contraseña debe tener más de 6 caracteres");
            return;
        }
        alert("Login successful");
    }

    const actualizarCampo = (campo:keyof Usuario, valor:string|boolean)=>{
        setUsuario({
            ...usuario,
            [campo]: valor
        })
    }

    const filtroEmail: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const filtroPass:RegExp = /^.{7,}$/;

  return (
    <div>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium mb-2'>Email</label>
          <input className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500' type="text" value={usuario.email} 
          onChange={(e)=>{actualizarCampo("email",e.target.value)}}/>
        </div>
        <div>
          <label className='block text-sm font-medium mb-2'>Contraseña</label>
          <input className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500' type={usuario.check?"text":"password"} value={usuario.password} 
          onChange={(e)=>{actualizarCampo("password",e.target.value)}}/>
          <label className='block text-sm font-medium mb-2'>Mostrar Contraseña</label>  
          <input type='checkbox' checked={usuario.check} onChange={(e)=>{actualizarCampo("check",e.target.checked)}} />
        </div>
        <button type='submit' className='w-full py-2 bg-green-500 text-white rounded hover:bg-green-700 font-semibold'> Guardar Contacto</button>
      </form>

    
    </div>
  )
}

export default Login
