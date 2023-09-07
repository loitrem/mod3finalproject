import React, {useState} from 'react'
import SignUpForm from '../../components/SignUp/SignUpForm'
import LoginForm from '../../components/Login/LoginForm'


function AuthPage({setUser}) {

  const [showLogin, setShowLogin]=useState(true);

  return (
    <div>
      <br/>
      <br/>
      <div className='homeText'>Welcome, Please login or Register</div>
      
      <br/>
      <br/>
      <button onClick={()=>{setShowLogin(!showLogin)}}>
        {showLogin? 'Sign Up':'Login'}
      </button>
      <div>
        {showLogin ? <LoginForm setUser={setUser}/>: <SignUpForm setUser={setUser}/>}
      </div>
    
      </div>
  )
}

export default AuthPage