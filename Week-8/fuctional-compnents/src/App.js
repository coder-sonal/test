import logo from './logo.svg';
import './App.css';
import React from 'react';
import Part1 from './components/part1';
import Part2 from './components/part2';
import Part3 from './components/part3';
import Part4 from './components/part4';

class App extends React.Component{
  render(){
    return(
      <div>
          <Part1 />
          <Part2 />
          <Part3 />
          <Part4 />
      </div>
    )
  }
}

export default App;
