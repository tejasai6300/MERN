import React from 'react'
import { Link } from 'react-router-dom'

const Hook = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>React Hooks</h1>
      <p>Explore different React Hooks:</p>
      <ol style={{ display: 'inline-block', textAlign: 'left' }}>
        <li style={{ margin: '10px 0' }}>
          <Link to='/useState' style={{ fontSize: '18px', textDecoration: 'none' }}>useState</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to='/useEffect' style={{ fontSize: '18px', textDecoration: 'none' }}>useEffect</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to='/useEffectApi' style={{ fontSize: '18px', textDecoration: 'none' }}>useEffect with API</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to='/useRef' style={{ fontSize: '18px', textDecoration: 'none' }}>useRef</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to='/useMemo' style={{ fontSize: '18px', textDecoration: 'none' }}>useMemo</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to='/useReducer' style={{ fontSize: '18px', textDecoration: 'none' }}>useReducer</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to='/useCallback' style={{ fontSize: '18px', textDecoration: 'none' }}>useCallback</Link>
        </li>
      </ol>
    </div>
  )
}

export default Hook
