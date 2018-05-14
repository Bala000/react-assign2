import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
class App extends Component {

  state = {
    length: 0,
    word: ""
  }

  nameChangeHandler = (event) => {
    this.setState({
      length: event.target.value.length,
      word: event.target.value
    });
  }

  deleteCharHandler = (index) => {
    let word = this.state.word;
    word = word.split("").filter((elem,ind) => {
      return index!=ind;
    });
    word = word.join(""); 
    this.setState(
      {
      word: word,
      length: word.length 
      }
    );
  }

  render() {

    let charComponents = this.state.word.split("").map( (letter,index) => {
          return (
            <CharComponent letter={letter} key={index} click={()=> this.deleteCharHandler(index)}/>
          );
    });
    return (
      <div className="App">
       <input type="text" onChange = {this.nameChangeHandler} />
       <p>{this.state.length}</p>
       <ValidationComponent len={this.state.length}/>
       {charComponents}
      </div>
    );
  }
}

export default App;
