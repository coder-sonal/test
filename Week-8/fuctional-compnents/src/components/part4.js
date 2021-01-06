import React from 'react';
import Home from './home';
import Download from './download';
import './components.css';

class Part4 extends React.Component{
    render(){
        return(
            <div className="display">
                <Home />
                <Download />
            </div>
        )
    }
}
export default Part4