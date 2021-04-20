import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SidebarOption from './SidebarOption';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import SidebarFooter from './SidebarFooter';
import MapIcon from '@material-ui/icons/Map';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FavoriteIcon from '@material-ui/icons/Favorite';
import db from '../firebase';

function Sidebar() {

          const [channels, setChannels] = useState([])

          useEffect(()=>{
                db.collection('rooms').onSnapshot(snapshot=>(
                    setChannels(snapshot.docs.map(doc=>({
                                id:doc.id,
                                name:doc.data().name,
                    }))
                )))
          },[])

          console.log(channels)

          return (
                    <div className='sidebar'>
                              <div className="sidebar__header">
                                        <div className="sidebar__headerTitle">
                                        <p>Acme market</p>
                                        <KeyboardArrowDownIcon className='sidebar__headerArrow' style={{ fontSize: 18 }}/>
                                        </div>
                                        <div className="sidebar__headerTencil">
                                        <BorderColorIcon className='sidebar__headerPencil' style={{ fontSize: 11 }}/>
                                        </div>
                              </div>
                              <div className="sidebar__options">
                              <SidebarOption Icon={MoreVertIcon} text='Browser Slack'/>
                              <SidebarOption Icon={ArrowDropDownIcon} text='Channels'/>
                              <SidebarOption Icon={AddBoxIcon} addChanneloption text='Add channels'/>
                              {channels.map(channel=>(
                                        <SidebarOption Icon='' text={channel.name} id={channel.id}/>
                              ))}
                              {/* <SidebarOption Icon='' text='clone'/> */}
                              {/* <SidebarOption Icon='' text='general'/>
                              <SidebarOption Icon='' text='random'/> */}
                              {/* 
                              <SidebarOption Icon={MoreVertIcon} text='Direct messages'/>
                              <SidebarOption Icon={AccountBoxRoundedIcon} text='Slackbot'/>
                              <SidebarOption Icon={AccountBoxRoundedIcon} text='naren n'/>
                              <SidebarOption Icon={AccountBoxRoundedIcon} text='darthi'/>
                              <SidebarOption Icon={AccountBoxRoundedIcon} text='Add teammates'/> */}
                              </div>

                              <hr/>

                              <div className="sidebar__notes">
                                        <SidebarFooter header='Learn How to...' Icon='' text=''/>
                                        <SidebarFooter Icon={MapIcon} text='Run a project'/>
                                        <SidebarFooter Icon={EmojiObjectsIcon} text='BrainStrom in slack'/>
                                        <SidebarFooter Icon={FavoriteIcon} text='Stay connected'/>
                              </div>

                              
                    </div>
          )
}

export default Sidebar
