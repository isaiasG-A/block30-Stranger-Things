import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

function PostForm ({ token }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [location, setLocation] = useState();
  const navigate = useNavigate();

  async function makePost(event) {
    event.preventDefault();
    const COHORT_NAME = '2302-ACC-PT-WEB-PT-D';
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
          body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: location
          }
        })
      });
      const result = await response.json();
      const success = result.success;

      success ? navigate("/myposts") : null;
      
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <>
    <Link to="/usermenu">Menu</Link>
    <h2>Create Post</h2>
    <form onSubmit={makePost}>
      <label>
        Title 
          <input 
            value ={title} 
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>
        <label>
          Description: 
          <input 
            value ={description} 
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input 
            value ={price} 
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </label>
        <label>
          Location: 
          <input 
            value ={location} 
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
    </form>
    </>
  )
}

export default PostForm;