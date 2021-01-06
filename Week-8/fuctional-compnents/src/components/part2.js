import React from 'react';
import Login from './login';
import ContactUs from './contactus';
import './components.css'

class Part2 extends React.Component{
    render(){
        return(
            <div className="display">
                <Login />
                <ContactUs />
            </div>
        )
    }
}
export default Part2