import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"

// const Header = () => {
//     return (
//         <header className="header">
//             <a href="/" className="header-item">Home</a>
//             <a href="/about" className="header-item">About</a>
//         </header>
//     )
// }

// The above using NavLink
const Header = () => {
    return (
        <header className="header">
            <NavLink 
                to="/" 
                className={({isActive, isPending}) => {
                    return isActive ? "header-item header-item-active" : isPending ? "header-item header-item-pending" : "header-item"
                }}
            >
                Home
            </NavLink>
            <NavLink 
                to="/about" 
                className={({isActive, isPending}) => {
                    return isActive ? "header-item header-item-active" : isPending ? "header-item header-item-pending" : "header-item"
                }}
            >
                About
            </NavLink>
        </header>
    )
}

export default Header