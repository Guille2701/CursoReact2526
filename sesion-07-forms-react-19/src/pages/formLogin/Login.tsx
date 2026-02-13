import { useActionState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { FormState, UsuarioData } from "../../types";



// comprobar usuario
const comprobarUsuario = async (usuario: UsuarioData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const usuarioGuardado = localStorage.getItem("usuario");
    if (!usuarioGuardado) {
        return {
            error: "Usuario no encontrado",
            success: null,
        };
    }
    const usuarioGuardadoObj = JSON.parse(usuarioGuardado);
    if (usuarioGuardadoObj.nombre === usuario.nombre && usuarioGuardadoObj.contrasena === usuario.contrasena) {
        return {
            error: null,
            success: "👌 Usuario encontrado correctamente",
        };
    }
    return {
        error: "❌ Error al comprobar el usuario : Usuario no encontrado",
        success: null,
    };
};

// Función que ejecuta react al enviar el formulario
const guardarAction = async (
    _prevState: FormState,
    formData: FormData, // <-- formData es el objeto que contiene los datos del formulario
): Promise<FormState> => {
    // extraer todos los datos de un formulario
    const nombreUsuario = formData.get("nombreUsuario") as string;
    const contrasena = formData.get("contrasena") as string;
    if (!nombreUsuario || !contrasena) {
        return {
            error: "Todos los campos son obligatorios",
            success: null,
        };
    }
    try {
        await comprobarUsuario({
            nombre: nombreUsuario,
            contrasena: contrasena,
        });
        return {
            error: null,
            success: "👌 Sesion iniciada correctamente",
        };
    } catch (error) {
        return {
            error: `❌ Error al iniciar sesion : ${error}`,
            success: null,
        };
    }
};

const Login = () => {
    const navigate = useNavigate();
    const [state, formAction, isPending] = useActionState(guardarAction, {
        error: null,
        success: null,
    })

    // Redirigir a form-todo después de un login exitoso
    useEffect(() => {
        if (state.success) {
            const timer = setTimeout(() => {
                navigate("/form-todo");
            }, 2000); // Espera 2 segundos antes de redirigir

            return () => clearTimeout(timer);
        }
    }, [state.success, navigate]);


    return (
        <div>
            <form action={formAction}>
                <div>
                    <label htmlFor="nombreUsuario">Nombre de usuario</label>
                    <input type="text" id="nombreUsuario" name="nombreUsuario" />
                </div>
                <div>
                    <label htmlFor="contrasena">Contraseña</label>
                    <input type="password" id="contrasena" name="contrasena" />
                </div>
                {/* Mensaje de error */}
                {state.error && (
                    <p className="text-red-500 mt-1">{state.error}</p>
                )}
                {/* Mensaje de exito */}
                {state.success && (
                    <p className="text-green-500 mt-1">{state.success}</p>
                )}
                <button type="submit"
                    disabled={isPending}
                    className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
                >{isPending ? "Iniciando sesion..." : "Iniciar sesion"}</button>
            </form>
        </div>
    );
}

export default Login