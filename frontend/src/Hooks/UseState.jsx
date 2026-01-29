import React, { useState } from 'react'

const UseState = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <div style={{ padding: '20px' }}>
      <h2>useState Hook Example</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>Reset</button>
      </div>

      <div>
        <h3>Name Input</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ padding: '8px', fontSize: '16px' }}
        />
        <p>Your name is: {name || 'Not entered'}</p>
      </div>
    </div>
  )
}

export default UseState
