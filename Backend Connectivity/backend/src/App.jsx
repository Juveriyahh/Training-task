import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from "./Componenets/Login"
import Register from "./Componenets/Register"


function App() {


  return (
   <BrowserRouter>
   <div className="container">
    <Link className="nav-link" to="login">Login</Link>
    <Link className="nav-link" to="register">Register</Link>
    <Routes>
      <Route path="login" element={<Login/>}></Route>
      <Route path="register" element={<Register/>}></Route>
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
