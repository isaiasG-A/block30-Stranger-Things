import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Posts from './components/Posts';
import Register from './components/Register';
import Login from "./components/Login";

function App() {

  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
    <Routes>
      <Route path="/" element={<Posts />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  </>
  )
}

export default App
