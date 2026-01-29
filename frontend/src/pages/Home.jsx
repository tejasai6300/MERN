import React from 'react'
import '../App.css'

const Home = (props) => {

  return (
    <div className="container">
      <h1>Home</h1>
      <p>welcome to home page</p>
      <h2>{props.name}</h2>

    </div>
  )
}

export default Home
