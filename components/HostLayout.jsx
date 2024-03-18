import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        textDecoration: "underline"
    }
    return (
        <>
            <nav className="host-nav">
                <NavLink style={({isActive}) => isActive ? activeStyle : null} end to="/host">Dashboard</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/host/reviews">Reviews</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/host/vans">Vans</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/host/income">Income</NavLink>
            </nav>
            <Outlet />
        </>
    )
}