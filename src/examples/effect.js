import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  useEffect(() =>{
    (async () => {
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${type}`)
      setData(data)
    } )()
  }, [type])

  return(
    <div>
      <h1>Type: {type}</h1>
      <button onClick={() => setType('users')}>users</button>
      <button onClick={() => setType('posts')}>posts</button>
      <button onClick={() => setType('todos')}>todos</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App