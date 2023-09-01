import { useState } from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Posts from './components/Posts';
import Register from './components/Register';
import Login from "./components/Login";
import UserMenu from "./components/UserMenu";
import MyPosts from "./components/MyPosts";
import MyMessages from "./components/MyMessages";
import PostForm from "./components/PostForm";
import PostsMessages from "./components/PostsMessage";

function App() {
  const [token, setToken] = useState();
  const [username, setUsername] = useState();
  const [postId, setPostId] = useState();

  localStorage.setItem('access_token', `${token}`);
  localStorage.setItem('user', username);

  const savedUser = localStorage.getItem('user');
  const accessToken = localStorage.getItem('access_token');
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Posts />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login setToken={setToken} token={accessToken} setUserData={setUsername}/>}/>
      <Route path="/usermenu" element={<UserMenu token={accessToken} setToken={setToken} />}/>
      <Route path="/myposts" element={<MyPosts token={accessToken} />}/>
      <Route path="/posts" element={<PostsMessages token={accessToken} username={savedUser} setPostId={setPostId} />}/>
      <Route path="/createpost" element={<PostForm token={accessToken}/>}/>
      <Route path="/messages" element={<MyMessages token ={accessToken} postId={postId} />}/>
    </Routes>
  </>
  )
}

export default App;
