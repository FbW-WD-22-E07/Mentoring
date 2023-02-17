import { useState } from 'react';

function RightNavbar() {

  const [user, setUser] = useState({ username: '', password: '' })
  
  
  const changeHandler = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }


  const submitHandler = (e) => { 
    e.preventDefault();
    
    if (user.username === 'fahim' && user.password === '123') {
      alert('Welcome to my Application')
    } else {
      alert('username or password is wrong. Please try again.')
    }
   }

  return (
    <div className='right-nav'>
      <form onSubmit={submitHandler}>
        <input type="text" name='username' id='username' placeholder='Username' onChange={changeHandler}/>
        <input type="password" name='password' id='password' placeholder='Password' onChange={changeHandler} />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default RightNavbar