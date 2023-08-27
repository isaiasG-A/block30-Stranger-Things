import { useState } from "react";
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Posts from './components/Posts';
import Register from './components/Register';
import Login from "./components/Login";
import Logout from "./components/Logout";
import UserMenu from "./components/UserMenu";

function App() {
  const [token, setToken] = useState();

  return (
    <>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
    <Routes>
      <Route path="/" element={<Posts />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login setToken={setToken} token={token} />}/>
      <Route path="/logout" element={<Logout />} />
      <Route path="/usermenu" element={<UserMenu />}/>
    </Routes>
  </>
  )
}

export default App;
