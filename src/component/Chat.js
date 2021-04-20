import React, { useEffect, useState } from 'react'
import './Chat.css'

//params
import {useParams} from 'react-router-dom'
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Room() {
           //params from url
          const {roomId} = useParams()

          //room id and name memory
          const [roomHeaderDetails, setRoomHeaderDetails] = useState(null)

          //room id => messages
          const [roomMessages, setRoomMessages] = useState([])

          //change room name
          useEffect(()=>{
                  db.collection('rooms').doc(roomId).onSnapshot(snapshot=>{
                    setRoomHeaderDetails(snapshot.data())
                  })

                  db.collection('rooms').doc(roomId).collection('messages')
                  .orderBy('timestamp','desc')
                  .onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())) )

                  //dependency is room so it runs when the room history changes
          },[roomId])

          
          console.log(roomHeaderDetails)

          // console.log(roomMessages)

          return (
                    <div className='chat'>
                              {/* <h1>you are in {roomId} room</h1> */}
                              <div className="chat__header">
                                        <div className="chat__headerLeft">
                                                  
                                                  <div className="chat__headerLeftOptions">
                                                            <div className="chat__headerRoomName">
                                                                      {/* ? protection */}
                                                            <p>#{roomHeaderDetails?.name}
                                                            </p>
                                                            <StarOutlineOutlinedIcon style={{ fontSize: 14 }}/>
                                                            </div>
                                                            <p>Add a topic</p>
                                                  </div>
                                        </div>
                                        <div className="chat__headerright">
                                        <InfoOutlinedIcon style={{ fontSize: 14 }}/>
                                                  <p>
                                                  Details</p>
                                        </div>
                              </div>

                              <div className="chat__messages">
                                    {roomMessages.map(({message, timestamp, user, userImage}) =>(
                                              <Message
                                              roomHeaderDetails ={roomHeaderDetails}
                                              message = {message} 
                                              timestamp = {timestamp} 
                                              user = {user}
                                              userImage = {userImage}
                                              />
                                    ))}  
                              </div>

                              <div className="chat__input">
                                <ChatInput
                                channelName = {roomHeaderDetails?.name}
                                channelId = {roomId}
                                />
                              </div>
                    </div>
          )
}

export default Room
