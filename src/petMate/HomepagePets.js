import React from "react";
import PetDetails from "./PetDetails";
import "../sass/fragments/homepagePets.scss"

export default class HomePagePets extends React.Component {
    constructor(props) {
        super(props);

    }
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
                    <a>All pets</a>
                </div>
                <h3 className="desktop">Ready to mate pets?</h3>

                {pets}

                <button className="more">More</button>
            </section>
        )
    }
}