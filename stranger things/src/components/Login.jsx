import { useState} from 'react'
import { useNavigate} from "react-router-dom";


function Login ({ setToken, token }) {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [response, setResponse] = useState("");
const navigate = useNavigate();

async function loginRequest(event) {
  event.preventDefault();

  const COHORT_NAME = '2302-ACC-PT-WEB-PT-D';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    const result = await response.json();
    const error = await result.error;
    const token = await result.data.token;
    console.log(token)
    setToken(token);

    error ? setResponse(error) : setResponse(result.data.message); 
    token ? navigate("/usermenu") : null;
  } catch(error) {
console.log(error)  }
}

  return (
    <>
    <h2>Login</h2>
      <h4>{response}</h4>
      <form onSubmit={loginRequest}>
        <label>
          Username: 
          <input 
            value ={username} 
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <label>
          Password: 
          <input 
            value ={password} 
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  )
} 

export default Login