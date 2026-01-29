import React from 'react'
import AuthContext from './AuthContext'

const AuthProvider =() =>{
    const user ={
        id:1,
        name:"sai",
        email:"tejsai3690@gmail.com"
    }
    return(
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;
