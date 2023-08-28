import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MyPosts({ token, logout }) {
  const [getPosts, setGetPosts] = useState([]);

  useEffect(() => {
    const COHORT_NAME = '2302-ACC-PT-WEB-PT-D';
      const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
  
      async function myData() {
        try {
          const response = await fetch(`${BASE_URL}/users/me`,{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
            const result = await response.json();
            setGetPosts(result.data.posts)
        } catch(error) {
          console.log(error)
        }
      }
      myData();
  }, [])

  return (
    <>
      <Link to="/">All posts</Link>
      <Link to="/usermenu">Menu</Link>
      <Link to="/createpost">Create Post</Link>
      <button onClick={logout}>Log Out</button>
      {getPosts.map((post) => {
       return <div>
          <h2>{post.title}</h2>
          <h4>{post.description}</h4>
          <h6>{post.price}</h6>
          <p>{post.createdAt}</p>
        </div>
      })}
    </>
  )
}

export default MyPosts;