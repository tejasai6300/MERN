import React, { useRef, useEffect } from 'react'

const UseRef = () => {
  const inputRef = useRef(null)
  const countRef = useRef(0)

  useEffect(() => {
    // Focus the input when component mounts
    inputRef.current?.focus()
  }, [])

  const handleIncrement = () => {
    countRef.current += 1
    console.log('Count (ref):', countRef.current)
    // Note: This won't trigger a re-render, so we need to force update
    alert(`Count is now: ${countRef.current}`)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>useRef Hook Example</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>Input Focus Example</h3>
        <input
          ref={inputRef}
          type="text"
          placeholder="This input is auto-focused"
          style={{ padding: '8px', fontSize: '16px', width: '300px' }}
        />
        <p>This input is automatically focused when the component mounts using useRef.</p>
      </div>

      <div>
        <h3>Mutable Value Example</h3>
        <p>Count (ref): {countRef.current}</p>
        <button onClick={handleIncrement}>Increment (check console/alert)</button>
        <p style={{ color: '#666', fontSize: '14px' }}>
          Note: useRef doesn't trigger re-renders. Check the console or alert to see the updated value.
        </p>
      </div>
    </div>
  )
}

export default UseRef
