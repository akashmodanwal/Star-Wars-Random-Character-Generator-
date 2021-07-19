import React from 'react';

class StarWars extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name:null,
            height:null,
            homeWorld:null,
            gender:null,
            buttonPressed:false
        }
    }
    getNewCharacter(){
        const randomNumber = Math.round(Math.random() *88)
        // const url = `https://swapi.dev/api/people/${randomNumber}/`
        const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            this.setState({
                name: data.name,
                height:data.height,
                homeWorld:data.homeworld,
                image: data.image,
                gender: data.gender,
                buttonPressed: true
            })
        })
        
    }
    render(){
        return(
            <div>
                <h1 className = "title1">Star Wars</h1>
                {
                    this.state.buttonPressed && 
                        <div className="stats">
                            <img src={this.state.image} alt="character"></img>
                            <h3>{this.state.name}</h3>
                            <p>{this.state.height} m </p>
                            <p>{this.state.gender}</p>
                            <p>Home World : {this.state.homeWorld}</p>
                            {/* <ul>
                                <li>{this.state.films}</li>
                            </ul>  */}
                        </div>
                }
               
                <button
                    type="button"
                    onClick={()=> this.getNewCharacter()}
                    className = "btn">
                        Get New Character 
                </button>

            </div>
        )
    }
}

export default StarWars ;