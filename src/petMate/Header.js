import React from "react";
import '../sass/fragments/header.scss';


export default function Header() {
    const toggleMenu = () => {
        let nav = document.querySelector("#nav");
        if (nav.style.visibility === "visible") {
            nav.style.visibility = "hidden";
            nav.style.height = "0"

        } else {
            nav.style.visibility = "visible";
            nav.style.height = "120px"
        }

    }

    return (
        <header>
            <div id="navButton" onClick={toggleMenu}>
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