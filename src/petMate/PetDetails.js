import React from 'react';
import '../sass/fragments/petDetails.scss';
export default function PetDetails (){
    return (
        <article>
        <img src="https://res.cloudinary.com/ebugo/image/upload/v1577224169/petmate/ueayioss5wbzurteynwz.jpg" alt="" className="pet_img" />
        <div className="p_details">
            <i className="petStatus"><span className="gender">Male</span><span className="status">Safe to pair</span></i>
            <h5 className="pet_name">Young Puppies</h5>
            <p className="pet-breed">Beagle </p>
            <span><i className="fa fa-map-marker"></i> <span className="pet_location">Ikeja, Lagos</span></span>
        </div>
    </article>
    )
}