import React from "react";
import '../sass/fragments/homepageIntro.scss';

export default function HomepageIntro() {
    return (
        <main>
            <section className="row">
                <div className="container">
                    <h3>Welcome!</h3>
                    <p>Have you been having headaches on how your pet is going to mate? This is the right place. Take a step by listing your pet for mating and find a match in no time.</p>
                    <h4>Click here to list your pet for mating</h4>

                    <p className="link"><a >Click Here</a></p>
                </div>
            </section>
        </main>
    )
}