import React from 'react'
import './SidebarOption.css'
import { useHistory } from "react-router-dom";
import db from '../firebase';

function SidebarOption({Icon, text, id, addChanneloption}) {

          //use history hook from react router dom
          const history = useHistory()

          const selectChannel =()=>{
              if(id){
                        history.push(`/room/${id}`)
              }
              else{
                        history.push(text)
              }
          }

          const addChannel = ()=>{
                const channelName = prompt('Add a new channel')

                if(channelName){
                          db.collection('rooms').add({
                                    name:channelName
                          })
                }
          }

          return (
                    <div className='sidebarOption' onClick={addChanneloption ? addChannel : selectChannel}>
                              {Icon && <Icon style={{ fontSize: 16 }} className='sidebarOption__icon'/>}
                              {Icon ? (<p>{text}</p>) : (<p><span>#</span>{text}</p>)}
                    </div>
          )
}

export default SidebarOption
