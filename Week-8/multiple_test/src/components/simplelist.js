import React from 'react';
import './app.css'

class SimpleList extends React.Component{
    render(){
        return(
            <ol className="list">
                <li>Apple</li>
                <li>Banana</li>
                <li>Pineapple</li>
                <li>Mango</li>
            </ol>
        )
    }
}
export default SimpleList