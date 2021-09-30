import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
    
    return (
        <div>
            <NavLink to="/" > Home </NavLink>
            <NavLink to="/ambassador" > Ambassador </NavLink>
            <NavLink to="/programs" > Programs </NavLink>
            <NavLink to="/webdev" > Web Dev </NavLink>
            <NavLink to="/jstoolkits" > JS Toolkits </NavLink>
        </div>
    )
}

export default Links