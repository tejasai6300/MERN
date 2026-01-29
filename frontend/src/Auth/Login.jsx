import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple validation
    if (email === '' || password === '') {
      setMessage('Please fill all fields')
      return
    }

    // Dummy login check
    if (email === 'admin@gmail.com' && password === '123456') {
      setMessage('Login successful ✅')
    } else {
      setMessage('Invalid email or password ❌')
    }
  }

  const styles = {
    container: {
      width: '300px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      textAlign: 'center'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    input: {
      padding: '8px',
      fontSize: '16px'
    },
    button: {
      padding: '8px',
      fontSize: '16px',
      cursor: 'pointer'
    }
  }

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  )
}

export default Login
