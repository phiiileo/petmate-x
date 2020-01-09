import React from "react";
import { Link } from "react-router-dom";
import '../sass/fragments/header.scss';

export default function Header() {
    const toggleMenu = () => {
        let nav = document.querySelector("#nav");
        if (nav.style.visibility === "visible") {
            nav.style.visibility = "hidden";
            nav.style.height = "0"

        } else {
            nav.style.visibility = "visible";
            nav.style.height = "200px";
        }

    }

    return (
        <header>
            <div id="navButton" onClick={toggleMenu}>
                <div className="stick"></div>
                <div className="stick"></div>
                <div className="stick"></div>
            </div>
            <span className="logo"><i className="fa fa-paw"> </i><Link to="/" > PetMate</Link>
            </span>
            <span className="search">
                <i className="fa fa-search"></i>
            </span>
            <nav id="nav">
                <Link to="/petmate-x">Home</Link>
                <Link to="/policy">Policy</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/sign-in">Sign In</Link>
            </nav>

        </header>
    )
}