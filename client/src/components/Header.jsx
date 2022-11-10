import React from 'react';
import logo from '../assets/logo.png'
import HeaderElement from "./HeaderElement"
import icons from "../assets/Icons"
import Search from "./Search"
import {Link} from "react-router-dom"



function Header() {
    return (
        <div className="flex justify-between items-center mt-2 mr-2">
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
            <Search />
            <div className="flex">
                { icons.map(icon => <HeaderElement icon={icon} key={icon.id} />) }
            </div>

        </div>
    );
}

export default Header;