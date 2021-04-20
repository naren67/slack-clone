import React from 'react'
import './Message.css'

function Message({message, timestamp, user, userImage, roomHeaderDetails}) {

          console.log('this is the rom header' ,roomHeaderDetails)

          return (
                    <div className='message'>
                              <div className="message__infoOnly">
                              <div className="message__profile">
                              <img src={userImage} alt=""/>
                              </div>
                              <div className="message__userInfo">
                                         <p>{user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span> </p>
                                         <p>joined #{roomHeaderDetails.name}</p>
                              </div>
                              </div>
                              <div className="message__sentByUser">
                                        <p>{message}</p>
                              </div>
                    </div>
          )
}

export default Message
