import React from "react";
import PetDetails from "./PetDetails";
import {Link} from "react-router-dom";
import "../sass/fragments/homepagePets.scss"

export default class HomePagePets extends React.Component {
    render() {
        let pets = this.props.details.map(value => {
            return (
                <PetDetails key={value.id} details={value} />
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


                <button className="more"><Link to="/petmate-x/pet-list">More</Link></button>
            </section>
        )
    }
}