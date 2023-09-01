import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyMessages({ token, postId }) {
  const [message, setMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState([]);

  const COHORT_NAME = '2302-ACC-PT-WEB-PT-D';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  const postMessage = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: {
            content: message
          }
        })
      });

      const result = await response.json();
      setMessage("")
      return result
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const myData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        const result = await response.json();
        setDisplayMessage(result.data.messages)
      } catch (err) {
        console.error(err);
      }
    }
    myData();
  }, [displayMessage])

  const reverseData = [...displayMessage].reverse()
 
  return (
    <>
      <Link to="/posts">All posts</Link>
      <form onSubmit={postMessage}>
        <label>
          Message 
          <input 
            value ={message} 
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </label>
        <button>Submit</button>
      </form>
        
      <div>
        <h2>Messages</h2>
        {
         reverseData.map((message) => {
          return <>
            <div>
              <h5>User: {message.post.author.username}</h5>
              <h4>Post Title: {message.post.title}</h4>
            </div>
            <h4>My Message: {message.content}</h4>
          </>
         })
        }
      </div>
    </>
  )
}


export default MyMessages;