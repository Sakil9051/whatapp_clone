import React from 'react';
import Add from "../img/addAvatar.png"
const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formeWraper">
            <span className='logo'>Flash Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input id='file' type="file" style={{display:"none"}} />
                <label htmlFor="file">
                    <img src={Add} alt="error" />
                    <span>Add an avatar</span>
                </label>
                <button>Sing up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
      
    </div>
  )
}

export default Register
