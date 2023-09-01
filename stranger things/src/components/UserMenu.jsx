import { Link, useNavigate } from "react-router-dom";

function UserMenu ({ token }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem(token);
    return navigate("/");
  }

  return(
    <>
      <Link to="/posts">All Posts</Link>
      <Link to="/myposts">My Posts</Link>
      <Link to="/createpost">Create Post</Link>
      <button onClick={logout}>Log Out</button>
    </>
   )
}

export default UserMenu;

