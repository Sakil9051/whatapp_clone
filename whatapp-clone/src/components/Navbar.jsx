import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Flash Chat</span>
      <div className="user">
        <img src="https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png" alt="error" />
        <span>John</span>
        <button>Logout</button>
        </div>  
    </div>
  )
}

export default Navbar
