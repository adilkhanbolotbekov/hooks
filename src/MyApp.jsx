import React, {useState, useEffect} from 'react';
import axios from 'axios';
const MyApp = () => {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    // useEffect(() => {
    //     console.log('render')
    // })

    useEffect(() => {
        (async () => {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${type}`)
            setData(data)
            
        })()
    }, [type])

    return(
        <div>
            <h1>Ресурс: {type}</h1>
            <button onClick={() => setType('users')}>Пользователи</button>
            <button onClick={() => setType('todos')}>Todos</button>
            <button onClick={() => setType('posts')}>Посты</button>
            <pre>{JSON.stringify(data, null , 2)}</pre>
        </div>
    )
}


export default MyApp