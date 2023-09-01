
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");

  useEffect(() => {
    const COHORT_NAME = '2302-ACC-PT-WEB-PT-D';
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

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
  }, [])

  function postMatches(post, text) {
    return(
      post.title.toLowerCase().includes(text.toLowerCase()) || post.description.toLowerCase().includes(text.toLowerCase()) || post.author.username.toLowerCase().includes(text.toLowerCase())


    )
  }

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
    <form>
        <label>
          Search 
          <input 
            value ={searchTerm} 
            onChange={(event) => setSearchTerm(event.target.value)}
            required
          />
        </label>
    </form>
      {
        postsToDisplay.map((post) => {
          console.log(post)
         return <div key={post._id}>
            <h2>{post.title}</h2>
            <h3>{post.description}</h3>
            <h5>Author: {post.author.username}</h5>
            <h6>Created: {post.createdAt}</h6>
            <h6>Location: {post.location}</h6>
          </div>
        })
      }
    </>
  )
}

export default Posts



