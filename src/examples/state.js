import React, {useState} from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)
  const [state, setState] = useState({
    title: 'counter',
    date: Date.now(),
  })

  function increment() {
    setCounter(prev => prev  + 1)
    setCounter(prev => prev  + 1)
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: "new title"
      }
    })
  }
  return(
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={increment} className="btn btn-success">+</button>
      <button onClick={() => setCounter(counter - 1)} className="btn btn-danger">-</button>
      <button onClick={updateTitle} className="btn btn-success">rename</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export default App