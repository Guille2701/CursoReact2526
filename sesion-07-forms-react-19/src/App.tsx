import { Navigate, Route, Routes } from "react-router-dom"
import FormTodoList from "./pages/formBasico/FormTodoList"
import Login from "./pages/formLogin/Login"
import Register from "./pages/FormRegister/Register"



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/form-todo" replace/>}/>
        <Route path="/form-todo" element={<FormTodoList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
