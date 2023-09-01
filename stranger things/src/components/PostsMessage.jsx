import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Posts ({ username, token, setPostId }) {
  const [posts, setPosts] = useState([]);

  const COHORT_NAME = '2302-ACC-PT-WEB-PT-D';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const result = await response.json();
        setPosts(result.data.posts);
      } catch(error) {
        console.log(error)
      }
    }
    fetchPosts(); 
  }, [posts])

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
      return result
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      {
        posts.map((post) => {
         return <div key={post._id}>
            <h2>{post.title}</h2>
            <h3>{post.description}</h3>
            <h5>Author: {post.author.username}</h5>
            <h6>Created: {post.createdAt}</h6>
            <h6>Location: {post.location}</h6>
            {
              username !== post.author.username ? <Link onClick={() => setPostId(post._id)} to="/messages">Messages</Link> : <button onClick={() => deletePost(post._id)}>Delete Post</button>
            }
          </div>
        })
      }
    </>
  )
}

export default Posts;


