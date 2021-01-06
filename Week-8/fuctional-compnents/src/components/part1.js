import React from 'react';
import Joinus from './joinus';
import Setting from './setting';
import './components.css'


class Part1 extends React.Component{
    render(){
        return(
            <div className="display">
                <Joinus />
                <Setting />
            </div>
        )
    }
}
export default Part1