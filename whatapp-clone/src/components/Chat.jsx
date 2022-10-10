import React from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png";
import Massages from './Massages';
import Input from './Input';
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jone</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
        
      </div>
      <Massages/>
        <Input/>
    </div>
  )
}

export default Chat
