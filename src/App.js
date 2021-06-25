import React, {useState, useEffect} from 'react';
import axios from 'axios'
import UserData from './components/UserData';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const url = 'https://jsonplaceholder.typicode.com/users'

      const {data:users} = await axios.get(url)     
      setUsers(users)
      
    })()

    
  },[])
  
  
  return (
    <div>
      <UserData users={users} />
    </div>
  )
  
}

export default App;
