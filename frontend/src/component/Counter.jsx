import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Counter App</h1>
      <h2 style={{ fontSize: '48px', margin: '20px 0' }}>{count}</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={handleDecrement}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Reset
        </button>
        <button
          onClick={handleIncrement}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter
