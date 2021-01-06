import React from 'react';
import Search from './search';
import Help from './help';
import './components.css'

class Part3 extends React.Component{
    render(){
        return(
            <div className="display">
                <Search />
                <Help />
            </div>
        )
    }
}
export default Part3