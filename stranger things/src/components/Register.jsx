import { useState } from 'react'

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");  
  const [ error, setError] = useState("");

  async function signUp(event) {
    event.preventDefault();

    const COHORT_NAME = '2302-ACC-PT-WEB-PT-D';
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

    if(password === confirmPassword) {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      })
      const result = await response.json(); 
      setError("Sucess! Account has been created. Please login")
      console.log(result.success)
if(result.success ===  false) {
        console.log(result)

  setError("User already exists, please login instead.")
} 

      
      return result
    } catch(error) {
      console.log(error);
    }
} else {
  setError("Password does not match")
}
  }

  return (
    <div className="signup">
    <h2>Register</h2>
      <form onSubmit={signUp}>
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
        <h4>{error}</h4>
        <label>
          Confirm Password: 
          <input 
            value ={confirmPassword} 
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </label>
        <button>Submit</button>
      </form>
  </div>
  )
}

export default Register
