import React from 'react';

class Profileimg extends React.Component{
    render(){
        return(
            <div className="imagediv">
                <div className="pro">PRO</div>
                <img className="image" src="./profileimg.jpg" height="50%" width="50%"></img>
            </div>
        )
    }
}
export default Profileimg