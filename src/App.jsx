import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>COUNT {count}</p>
      <button onClick={() => setCount(count + 1)
      }>BUTTON</button>
    </div>
  )
}

export default App
