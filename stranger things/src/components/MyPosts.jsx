import { useState, useEffect } from "react";

function MyPosts({ token, logout }) {
  const [getPosts, setGetPosts] = useState();

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
            return result
        } catch(error) {
          console.log(error)
        }
      }
      myData();
  }, [])

  return (
    <>
      <button onClick={logout}>Log Out</button>
      {console.log(getPosts)}
    </>
  )
}

export default MyPosts;