import { Link, Routes, Route, useNavigate } from "react-router-dom";

function UserMenu ({ token, setToken }) {
  const navigate = useNavigate();

  function logout() {
    setToken(null)
    return navigate("/");
  }

  return(
    <>
    <Link to="/">All Posts</Link>
    <Link to="/myposts">My Posts</Link>
    <Link to="/createpost">Create Post</Link>
    <button onClick={logout}>Log Out</button>
    </>
   )
}

export default UserMenu;