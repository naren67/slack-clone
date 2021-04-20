import React, { useState } from 'react'
import db from '../firebase'
import { useStateValue } from '../StateProvider'
import './ChatInput.css'
import firebase from 'firebase'
import SendIcon from '@material-ui/icons/Send';


function ChatInput({channelName, channelId}) {

          const [input, setInput] = useState('')
          const[{user}] = useStateValue()

          

          const SendToFirestore =(e)=>{
                  e.preventDefault()
                  
                  console.log(channelId )
                 
           //send message only if the channel id exist orelse input type disabled
               if(channelId){
                         db.collection('rooms').doc(channelId).collection('messages').add({
                                   message:input,
                                   timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                                   user:user.displayName,
                                   userImage:user.photoURL,
                         })
               }

               setInput('')

          }

          // console.log(input)


          return (
                    <div className='chatInput'>
                              <form>
                                  <div className="chatInput__messenger">
                                  <input placeholder={`Message #${channelName}`} value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
                                        <button className='chatInput__Icon' onClick={SendToFirestore}><SendIcon className='chatInput__sendIcon'/></button>
                                  </div>
                              </form>
                    </div>
          )
}

export default ChatInput
