import React from 'react';
import {Link} from "react-router-dom";
import '../sass/fragments/petDetails.scss';

export default function PetDetails(props) {
    return (
        <article>
            <img src={props.details.petImageSrc} alt="" className="pet_img" />
            <div className="p_details">
                <i className="petStatus"><span className="gender">{props.details.petGender}</span><span className="status">{props.details.petStatus}</span></i>
                <h5 className="pet_name">{props.details.petName}</h5>
                <p className="pet-breed">{props.details.petBreed} </p>
                <span><i className="fa fa-map-marker"></i> <span className="pet_location">{props.details.petLocation}</span></span>
                <button className="view"  onClick={props.handleClick}><Link to="/current-pet" id={props.details.id}>View</Link></button>
            </div>
        </article>
    )
}