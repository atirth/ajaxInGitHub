import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Clock from "./Clock/Clock.js";
import Button from "./Button/Button.js";

class App extends Component {
  state = {
    person:[
    { name :"Ajay"}
    ],
    Clock : [
    {date : new Date()}
    ],
    istoggle:false,
  }
  ChangetextHandler = (event) =>{
    this.setState({
      person : [
       { name :  event.target.value}
       ]
    })
  }
  toggleHandler = () => {
    this.setState({
      istoggle : !this.state.istoggle
    });
  }
  updateCLockState = () =>{
    this.setState({
       Clock : [
        {date : new Date()}
       ]
    })
  }
  componentDidMount(){
    this.timerID = setInterval( () =>{
      this.updateCLockState();
    },1000);
  }

  render() {
    //Toggling Button code start
    let persons = null;
    if(this.state.istoggle){
      persons = (
        <Person value={this.state.person[0].name} />
      )
    }
    //Toggling Button code ends
    return (
      <div className="App">
        <Person onchanged={this.ChangetextHandler} value={this.state.person[0].name} />
        <Clock date={this.state.Clock[0].date.toLocaleTimeString()} />
        <Button onclick = {this.toggleHandler} name="Toggle button" />
        {persons}
      </div>
    );
  }
}

export default App;
