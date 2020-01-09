import React from "react";
import PetDetails from "./PetDetails";
import { Link } from "react-router-dom";
import "../sass/fragments/homepagePets.scss"

export default class HomePagePets extends React.Component {

    handleClick = (e) => {
        //get pet ID
        let target_id = (Number(e.target.id));
        //Return the pet details
        let target_pet = this.props.details.filter(value => {
            return value.id === target_id
        })
        //get the target pet details
        let pet = target_pet[0];
        let imgSrc = pet.petImageSrc;
        let petName = pet.petName;
        let petBreed = pet.petBreed;
        let petLocation = pet.petLocation;
        let petGender = pet.petGender;
        let petStatus = pet.petStatus;

        //save the details to local storage for use
        localStorage.setItem('petImage', imgSrc);
        localStorage.setItem("petName", petName)
        localStorage.setItem("petBreed", petBreed)
        localStorage.setItem("petLocation", petLocation)
        localStorage.setItem("petGender", petGender)
        localStorage.setItem("petStatus", petStatus)
    }
    render() {
        let pets = this.props.details.map(value => {
            return (
                <PetDetails key={value.id} details={value} handleClick={this.handleClick} />
            )
        })

        return (
            <section className="pets">
                <div className="mobile">
                    <h3>AVAILABLE FOR MATING</h3>
                    <p>(based on your location)</p>
                    <Link to="/petmate-x/pet-list">All pets</Link>
                </div>
                <h3 className="desktop">Ready to mate pets?</h3>
                <div className="petList">
                    {pets}
                </div>


                <button className="more"><Link to="/pet-list">More</Link></button>
            </section>
        )
    }
}