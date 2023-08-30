import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MyPosts({ token, logout }) {
  const COHORT_NAME = '2302-ACC-PT-WEB-PT-D';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
  
  const [getPosts, setGetPosts] = useState([]);

  useEffect(() => {
    async function myData() {
      try {
        const response = await fetch(`${BASE_URL}/users/me`,{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
          const result = await response.json();
          let postsData = result.data.posts;

          setGetPosts(postsData.filter((post) => {
            return post.active === true;
          }));
      } catch(error) {
        console.log(error)
      }
    }
    myData();
  }, [getPosts])

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
        const result = await response.json();
        console.log(result);

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Link to="/">All posts</Link>
      <Link to="/usermenu">Menu</Link>
      <Link to="/createpost">Create Post</Link>
      <button onClick={logout}>Log Out</button>

      {       
        getPosts.map((post) => {
          return <div key={post._id}>
              <h2>Title: {post.title}</h2>
              <h4>Description: {post.description}</h4>
              <h5>Price: {post.price}</h5>
              <h5>Location: {post.location}</h5>
              <p>Created At: {post.createdAt}</p>
              <button onClick={() => deletePost(post._id)}>Delete Post</button>
            </div>
      })
        }
    </>
  )
}

export default MyPosts;
