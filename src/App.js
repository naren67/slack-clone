import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chat from './component/Chat';
import { useState } from 'react';
import Login from './component/Login';
import { useStateValue } from './StateProvider';

function App() {

  // const [user, setUser] = useState('')

  //google user data provider from reducer
  const [{user}, dispatch] = useStateValue()

  return (
    <div className="app">
         {!user ? (
           
           <Login/>

         ):(<>
            <Router>
          <Header/>
           <div className="app__body">
             <Sidebar/>
                  <Switch>
                  <Route path='/room/:roomId'>
                        <Chat/>
                      </Route>

                      <Route path='/'>
                        <h1>welcome to home</h1>
                      </Route>    
                  </Switch>   
           </div>
          </Router>
         </>)}
    </div>
  );
}

export default App;
