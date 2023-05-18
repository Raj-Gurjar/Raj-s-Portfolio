import { Link } from "react-router-dom"
import "./Nav-style.css"

import React from 'react'

const Navbar = () => {
    return (
        <div className="header">

            <Link to = "/">
                <h1>Portfolio</h1>
            </Link>


            <ul>
                <li>
                    <Link to = "/about">About</Link>
                </li>
                <li>
                    <Link to = "/skills">Skills</Link>
                </li>
                <li>
                    <Link to = "/projects">Projects</Link>
                </li>
                <li>
                    <Link to = "/contact">Contact</Link>
                </li>

            </ul>


        </div>
    )
}

export default Navbar