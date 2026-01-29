import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)

  const cubeNum = (num) => {
    console.log('Calculation done...')
    return Math.pow(num, 3)
  }

  // Only recalculate when `number` changes
  const result = useMemo(() => cubeNum(number), [number])

  return (
    <div style={{ padding: '20px' }}>
      <h2>useMemo Hook Example</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Count++</button>

      <div style={{ marginTop: '20px' }}>
        <input
          type="number"
          onChange={(e) => setNumber(Number(e.target.value))}
          placeholder="Enter a number"
        />
        <p>Cube of the number is {result}</p>
      </div>
    </div>
  )
}

export default UseMemo