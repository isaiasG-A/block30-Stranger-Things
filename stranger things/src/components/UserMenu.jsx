import {Link} from "react-router-dom";

function UserMenu () {
  return(
    <>
    <Link to="/">All Posts</Link>
    <Link to="/myPosts">My Posts</Link>
    <Link to="/cratePost">Create Post</Link>
    <Link to="/logout">Log Out</Link>
    </>
   )
}

export default UserMenu;