import React from 'react'
import { auth, provider } from '../firebase'
import { actionTypes } from '../reducer'
import { useStateValue } from '../StateProvider'
import './Login.css'

function Login() {

          const [state, dispatch] = useStateValue()

          // export {auth, provider} login system
          // const signIn =()=>{
          //      auth.signInWithPopup(provider)
          //      .then(res=>{
          //                console.log(res)
          //      })
          //      .catch(error=>{
          //                alert(error.message)
          //      })
          // }

          const signIn =()=>{
                    auth.signInWithPopup(provider)
                    .then(result=>{
                              console.log(result)

                              dispatch({
                                        type:actionTypes.SET_USER ,
                                        user:result.user,
                              })

                    })
                    .catch(error=>{
                              alert(error.message)
                    })
               }

          return (
                    <div className='login'>
                              <div className="login__details">
                                       <div className="login__logo">
                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/498px-Slack_Technologies_Logo.svg.png" alt=""/>
                                       </div>
                                       <div className="login__acmeMarket">
                                                 <p>Sign in to Acme market</p>
                                                 <p>acme-market-co.slack.com</p>
                                       </div>

                                       <div className="login__line"></div>
                                       <div className="login__googleBtn">
                                                 <button onClick={signIn}>
                                                           <img src="https://www.lucabottarostudio.com/wp-content/uploads/2019/05/google_PNG19635.png" alt=""/>
                                                           <p>Sign in with Google</p>
                                                 </button>
                                       </div>

                                       <div className="login__line"></div>
                              </div>
                    </div>
          )
}

export default Login
