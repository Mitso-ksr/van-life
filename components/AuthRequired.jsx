import React from 'react'
import {Navigate , Outlet, useLocation} from 'react-router-dom'

function AuthRequired() {
    const authenticated = localStorage.getItem("loggedIn")
    const location = useLocation()
    console.log(location, "auth")
    if (!authenticated) {
        return (<Navigate to ="/login" state = {{message: "You must login first", from: location}} replace/>)
    }
    return (<Outlet />)

}

export default AuthRequired
