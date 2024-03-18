import React from "react"
import { NavLink , Link} from "react-router-dom"

export default function Header() {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        textDecoration: "underline"
    }
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/about">About</NavLink>
                <NavLink style = {({isActive}) => isActive ? activeStyle : null} to="/vans">Vans</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle : null} to ="/host">Host</NavLink>
            </nav>
        </header>
    )
}
