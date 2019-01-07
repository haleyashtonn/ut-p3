import React from 'react'

class Carousel extends React.Component{
    render(){
        return(
            <div className="carousel">
                <div className="carousel-item center-align">
                <a href="{{this.url_linkedin}}" target="_blank">
                <h2> Name:</h2>
                <img className="responsive-img" src="{{this.url_photo}}" alt="{{this.fullname}}"></img>
                </a>
                <p>Bio:</p>
            </div>     
    </div>
        )
    }
} export default Carousel