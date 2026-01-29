import React, { useCallback } from 'react'
import Header from '../component/Header';

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const Newfun =useCallback(() => {
    },[count])
  return (
    <div>
        <Header newFun={Newfun}/>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Count++</button>
    </div>
  )
}

export default UseCallback