import React, { useState } from 'react';
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const Register = () => {
const [err,setErr]=useState(false)
const handalesubmit=async (e)=>{
e.preventDefault();
const displayName=e.target[0].value;
const email=e.target[1].value;
const password=e.target[2].value;
const file=e.target[3].files[0];




try{
  const res=await createUserWithEmailAndPassword(auth, email, password)
 


const storageRef = ref(storage,displayName);

// Upload the file and metadata
const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(
  (error)=>{
    setErr(true)
  },
  ()=>{
    getDownloadURL(uploadTask.snapshot.raf).then((downloadURL)=>{
      console.log(`File available at ${downloadURL}`)
    })
  }
)
}catch(err){
  setErr(true)
}


 

}

  return (
    <div className='formContainer'>
        <div className="formeWraper">
            <span className='logo'>Flash Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handalesubmit}>
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
            {err?<p>Somthing is wrong</p>:null}
            <p>You do have an account? Login</p>
        </div>
      
    </div>
  )
}

export default Register
