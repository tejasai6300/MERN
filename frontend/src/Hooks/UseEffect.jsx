import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Component Mounted")
    return () => {
      console.log("Component Unmounted")
    }
  }, [])

  useEffect(() => {
    console.log("Count changed:", count)
  }, [count])

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>useEffect Hook Example</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', margin: '10px' }}
      >
        Increment
      </button>
      <p style={{ color: '#666', fontSize: '14px', marginTop: '20px' }}>
        Check the browser console to see useEffect logs.
      </p>
    </div>
  )
}

export default UseEffect
