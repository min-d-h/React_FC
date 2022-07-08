import React,{useState} from 'react'

export default function State() {
  const initiaCount = 0;
  const [count, setCount] = useState(initiaCount);
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(initiaCount)}>Reset</button>
      <button onClick={() => setCount(prev => prev -1)}>--</button>
      <button onClick={() => setCount(prev => prev +1)}>++</button>
    </div>
  )
}
