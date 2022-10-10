import React from 'react';
import Add from "../img/addAvatar.png"
const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formeWraper">
            <span className='logo'>Flash Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <button>Sing in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
      
    </div>
  )
}

export default Login
