import {useState} from 'react'

const ListRender = () => {
  const [list] = useState(["Talliny", "Lucas", "Joaquim"])
  const [users, setUsers] = useState([
    {id: 1, name: "Talliny", age: 32},
    {id: 2, name: "Lucas", age: 29},
    {id: 3, name: "Joaquim", age: 1},
  ])

  const deleteRandom = () => {
    setUsers((prevUsers) =>{
      console.log(`prevUsers: ${prevUsers}`)
      const randomNumber = Math.floor(Math.random() * 4)
      console.log(`randomNumber: ${randomNumber}`)

      return prevUsers.filter((user) =>  randomNumber !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {
          list.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        }
      </ul>
      <ul>
        {
          users.map((user, i) => (
            <li key={user.id}>{user.name} - {user.age}</li>
          ))
        }
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender