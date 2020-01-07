import React from "react";
import PetDetails from "./PetDetails";
import "../sass/fragments/homepagePets.scss"

export default class HomePagePets extends React.Component {

    render() {
        return (
            <section className="pets">
                <div className="mobile">
                    <h3>AVAILABLE FOR MATING</h3>
                    <p>(based on your location)</p>
                    <a >All pets</a>
                </div>
                <h3 className="desktop">Ready to mate pets?</h3>
                <PetDetails />
                <button className="more">More</button>
            </section>
        )
    }
}