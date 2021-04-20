import React from 'react'
import './SidebarFooter.css'

function SidebarFooter({header, Icon, text}) {
          return (
                    <div className='sidebarFooter'>
                           {header ? (<p>{header}</p>):(
                                     <div className="SidebarFooter__notes">
                                               <Icon className='sidebarFooter__icon' style={{ fontSize: 16 }}/>
                                     <p>{text}</p>
                                     </div>
                           )}
                    </div>
          )
}

export default SidebarFooter
