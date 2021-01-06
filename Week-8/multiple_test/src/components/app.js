import React from 'react';
import SimpleList from './simplelist';
import './app.css';

class App extends React.Component{
    render(){
        return(
            <ul>
                <li className="heading">Shopping List</li>
                <SimpleList />
            </ul>
        )
    }
}
export default App