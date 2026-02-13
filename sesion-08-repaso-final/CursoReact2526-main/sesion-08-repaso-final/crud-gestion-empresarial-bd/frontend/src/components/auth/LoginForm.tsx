import React, { useActionState } from 'react'
import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
    const { login } = useAuth();

    const formAction= async(_prev:{error:string|null},formData:FormData):Promise<{error: string | null}>=>{
        const email = formData.get('email')?.toString().trim() ?? '';
        const password = formData.get('password')?.toString().trim() ?? '';

        if(!email || !password){
            return {error: 'Todos los campos son obligatorios'};
        }       
        const success = await login({email,password})
        if(!success){
            return {error: 'Credenciales invalidas'};
        }
        return {error: null};
    }

    const [state, handleSubmit, isPending] = useActionState(formAction, {error: null})

    return (
    <div>
        <form action={handleSubmit}
            className='bg-white p-6 rounded shadow-amber-950 max-w-md mx-auto' >
            {/* Aqui pondre los errores */}
            {state.error && <div className='bg-red-100 text-red-700 p-2 rounded mb-4'>{state.error}</div>}
        <div>
            <input type="email"
                    name='email' 
                    placeholder='email'
                    className='input'
                    required
            />
            <input type="password" 
                    name='password' 
                    placeholder='password' 
                    className='input' 
                    required
            />
        </div>
        <div className='flex gap-2 mt-5'>
            <button
                type='submit'
                disabled={isPending}
                className='btn btn-primary'
                >{isPending ? 'Logging in...' : 'Login'}</button>
            <p>Demo:xxxxx / xxxxx</p>
        </div>

        </form>
    </div>
  )
}

export default LoginForm