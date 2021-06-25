function UserData({users}) {
    

    if (!users || users.length === 0) return <p>Нет данных</p>

    return (
        <>
        
            <table>

                <thead>
                    <th>id</th>
                    <th>full name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>phone</th>
                </thead>
                <tbody>
                    {
                        users.map(person => 
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.username}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
       </> 
    )

}

export default UserData