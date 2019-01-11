import React from 'react'

class ImageBox extends React.Component{
    render(props){
        return(
            <div>
            <img id="imgFull"alt="suit.jpg" src="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?cs=srgb&dl=animal-corgi-dog-58997.jpg&fm=jpg"{...props}></img>
            </div>
        )
    }
}
export default ImageBox