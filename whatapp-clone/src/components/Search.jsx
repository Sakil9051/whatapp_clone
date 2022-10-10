import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchFrom">
        <input type="text" placeholder='find user' />
      </div>
      <div className="userChat">
        <img src="https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png" alt="" />
        <div className="userChatInfo">
            <span>Jone</span>
        </div>
      </div>
    </div>
  )
}

export default Search
