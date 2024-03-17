// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

import axios from 'axios';
import { Toast } from '@chakra-ui/react';
const AuthContext = createContext();
const url="https://courses-data-sort-backend.vercel.app"

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const login = (email, password) => {
    axios.post(url+'/game-user-log',{
      email,password
     }).then(e=>{
      let user=e.data
      console.log(user)
       setUser(user);
        
     }).catch((e)=>console.log(e))
  };
 const register=(email,name,password)=>{
     axios.post(url+'/game-user',{
      email,password,name
     }).then(e=>{
        
     }).catch((e)=>console.log(e))
 }
  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,register }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
