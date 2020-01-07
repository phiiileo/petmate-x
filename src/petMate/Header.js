import React from "react";
import '../sass/fragments/header.scss';


export default function Header() {
    return (
        <header>
            <div id="navButton">
                <div className="stick"></div>
                <div className="stick"></div>
                <div className="stick"></div>
            </div>
            <span className="logo"><i className="fa fa-paw"> </i><a > PetMate</a>
            </span>
            <span className="search">
                <i className="fa fa-search"></i>
            </span>
            <nav id="nav">
                <a >Policy</a>
                <a >About Us</a>
                <a >Contact us</a>
            </nav>

        </header>
    )
}