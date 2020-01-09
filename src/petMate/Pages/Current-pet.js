import React from 'react'
import { Link } from "react-router-dom";
import "../../sass/fragments/current-pet.scss";

export default function CurrentPet() {
    //Get pet details from local storage
    let petImage = localStorage.getItem('petImage');
    let petName = localStorage.getItem("petName");
    let petBreed = localStorage.getItem("petBreed");
    let petLocation = localStorage.getItem("petLocation");
    let petGender = localStorage.getItem("petGender");
    let petStatus = localStorage.getItem("petStatus");

    return (
        <React.Fragment>
        <div className = "currentPet">
            <section className="container">
                <div className="pet_image">
                    <img src={petImage} alt="Pet" />
                </div>
                <div className="p_details">
                    <h1 className="lead">Pet Details</h1>
                    <p>
                        <span className="title">Pet Name:</span>
                        <span className="pet_name"> {petName}</span>
                    </p>
                    <p>
                        <span className="title">Pet Breed: </span>
                        <span className="pet_breed"> {petBreed}</span>
                    </p>
                    <p>
                        <span className="title">Pet Gender: </span>
                        <span className="gender"> {petGender}</span>
                    </p>
                    <p>
                        <span className="title">Pet Location: </span>
                        <span className="location">
                            <i className="fa fa-map-marker"> </i> {petLocation}
                        </span>
                    </p>
                    <p>
                        <span className="title">Pet Status: </span>
                        <span className="status"> {petStatus}</span>
                    </p>

                </div>
            </section>
            <div id="btn-cont">
                <button><Link to="/">Pair with Pet</Link></button>
            </div>

        </div>
        <section className="footer">
            <div className="footer_container">
                <div className="policy">
                    <h3>Our Policy</h3>
                    <p>The policy content goes here The policy content goes here The policy content goes
                        here________________________________ __________________________________
                        ___________________________________ __________________________________ _______________ ________-
                        ___________ _________- __________ ________</p>
                </div>
                <div className="contact">
                    <h3>Contact Us</h3>
                    <p>Email: <span>info@dummy.com</span></p>
                    <p>Customer care: <span>08012345678</span></p>
                </div>
            </div>
            <div className="footer_footer">
                <p>All right reserved @petmate team 2019</p>
            </div>
        </section>
        </React.Fragment>
    )
}
