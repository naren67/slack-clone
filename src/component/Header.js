import React from 'react'
import './Header.css'
import ScheduleIcon from '@material-ui/icons/Schedule';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Avatar } from '@material-ui/core';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import { useStateValue } from '../StateProvider';

function Header() {

        const [{user}, dispatch] = useStateValue()

          return (
                    <div className='header'>
                              <div className="header__left">
                              <div className="header__timer">
                                      <ScheduleIcon className='header__icon'/>
                              </div>
                              <div className="header__search">
                                        <input placeholder='Search Acme market' type="text"/>
                              </div>
                              <div className="header__help">
                                     <HelpOutlineIcon className='header__icon'/>
                              </div>
                              </div>
                              <div className="header__account">
                                        <p>{user?.displayName}</p>
                                        <img src={user?.photoURL} alt={user?.displayName} className='header__icon'/>
                              </div>
                    </div>
          )
}

export default Header
