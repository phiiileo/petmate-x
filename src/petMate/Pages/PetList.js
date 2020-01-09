import React, { Component } from 'react'
import PetData from '../PetData'
import "../../sass/fragments/petLists.scss"
import PetDetails from '../PetDetails';
export default class PetList extends Component {
    constructor (props){
        super(props);
        this.state = {
            PetData,
        }
    }

    
    render() {
       let pets = this.state.PetData.map(value =>{
           return <PetDetails key={value.id} details ={value}/>
       })
        return (
            <div className="allPets">
                <h1>All pets available for mating</h1>
                <section className="petLists">
                  {pets}   
                </section>
               
            </div>
        )
    }
}
