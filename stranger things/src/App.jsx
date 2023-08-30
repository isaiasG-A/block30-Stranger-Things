import { useState } from "react";
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Posts from './components/Posts';
import Register from './components/Register';
import Login from "./components/Login";
import UserMenu from "./components/UserMenu";
import MyPosts from "./components/MyPosts";
import PostForm from "./components/PostForm";

function App() {
  const [token, setToken] = useState();

  localStorage.setItem('access_token', `${token}`);
  const accessToken = localStorage.getItem('access_token');
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Posts />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login setToken={setToken} token={accessToken} />}/>
      <Route path="/usermenu" element={<UserMenu token={accessToken} setToken={setToken} />}/>
      <Route path="/myposts" element={<MyPosts token={accessToken} />}/>
      <Route path="/createpost" element={<PostForm token={accessToken}/>}/>
    </Routes>
  </>
  )
}

export default App;
