// App.js


import React from 'react';
import { Provider } from 'react-redux';
import   Card  from './components/card';
import { useAuth} from './auth';
import { store } from './redux/store';
import { Game}  from './components/Game';
import User from "./components/UsernameForm"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Registration from './components/singup';


function App() {
  const {user}=useAuth()

  return (
    
    <Provider store={store}>  
    <BrowserRouter>
     <Routes>
      <Route index Component={user?Game:User}/>
      <Route path='/login' Component={User}/>
      <Route path='/reg' Component={Registration}/>
     </Routes>
    </BrowserRouter>  
  
    </Provider>
    

  );
}

export default App;
