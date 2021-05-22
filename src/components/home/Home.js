import React, {useContext} from 'react'
import {UserContext} from '../../UserContext';
import {Link} from 'react-router-dom';

const Home = () => {
  const {user,setUser} = useContext(UserContext)
  const setAsJohn = () => {
    const john = {
      name:'John',
      email:'john@email.com',
      password: '123',
      id:'1'
    }
    setUser(john);
  }
  const setAsTom = ()=>{
    const tom = {
      name:'Tom',
      email:'tom@email.com',
      password: '123',
      id:'2'
    }
    setUser(tom);
  }
  return (
    <div>
      <h1>Home {JSON.stringify(user)}</h1>
      <button onClick={setAsJohn}>John</button>
      <button onClick={setAsTom}>Tom</button>
      <button>go to chat</button>
    </div>
  )
}

export default Home
