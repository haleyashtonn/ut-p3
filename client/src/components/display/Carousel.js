import React from 'react'
import { Slider, Slide} from 'react-materialize'
class MeetUs extends React.Component{
    render(){
        return(
<div>
    
            <Slider>
            <Slide
                src="http://lorempixel.com/580/250/nature/1"
                title="Sohaib"
                >
                CTO
            </Slide>
            <Slide
                src="http://lorempixel.com/580/250/nature/2"
                title="Haley"
                >
                Head of Development
            </Slide>
            <Slide
                src="http://lorempixel.com/580/250/nature/3"
                title="Ping"
                >
                DB Systems and Structures
            </Slide>
            <Slide
                src="https://res.cloudinary.com/dm2obdaq7/image/upload/v1547780054/dog/jqpydstk6tafe7da3lck.jpg"
                title="Christian"
                >
                Design and Interaction
            </Slide>
            </Slider>
</div>
        )
    }
} export default MeetUs