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
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Posts />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login setToken={setToken} token={token} />}/>
      <Route path="/usermenu" element={<UserMenu token={token} setToken={setToken} />}/>
      <Route path="/myposts" element={<MyPosts token={token} />}/>
      <Route path="/createpost" element={<PostForm token={token}/>}/>
    </Routes>
  </>
  )
}

export default App;
