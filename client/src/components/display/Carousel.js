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
                placement="left"
                >
                DB Systems and Structures
            </Slide>
            <Slide
                src="https://res.cloudinary.com/dm2obdaq7/image/upload/v1547612052/dog/owjo5lnj9zacpoibbtzk.jpg"
                title="Christian"
                placement="right"
                >
                Design and Interaction
            </Slide>
            </Slider>
</div>
        )
    }
} export default MeetUs