
import { useState, useEffect } from 'react'

function Posts () {
  const [posts, setPosts] = useState([]);

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

  return (
    <>
      {
        posts.map((post) => {
          console.log(post)
         return <div key={post._id}>
            <h2>{post.title}</h2>
            <h3>{post.description}</h3>
            <h5>Author: {post.author.username}</h5>
            <h6>Created: {post.createdAt}</h6>
            
          </div>
        })
      }
    </>
  )
}

export default Posts