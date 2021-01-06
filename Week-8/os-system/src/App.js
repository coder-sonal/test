import logo from './logo.svg';
import OperatingSystem from './components/os';
import Opmanufacturers from './components/osmanufacture'
import './App.css';
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div>
        <OperatingSystem />
        <Opmanufacturers />
      </div>
    )
  }
}
export default App;
