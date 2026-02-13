import React from 'react'

const Login = () => {
  return (
    <form>
        <div>
            <label>Email</label>
            <input type='email'/>
        </div>
        <div>
            <label>Password</label>
            <input type='password'/>
        </div>

        <button type='submit'>Iniciar sesion</button>
    </form>
  )
}

export default Login
