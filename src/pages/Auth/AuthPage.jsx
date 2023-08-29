import React, {useState} from 'react'
import SignUpForm from '../../components/SignUp/SignUpForm'
import LoginForm from '../../components/Login/LoginForm'


function AuthPage({setUser}) {

  const [showLogin, setShowLogin]=useState(true);

  return (
    <div>
      <h1>AuthPage</h1>
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