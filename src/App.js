import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {progressStep: 1}
  progressStates = ['Design', 'Build', 'Launch']

  get needShowPrev() {
    return this.state.progressStep > 0
  }

  onClickNext = () => {
    this.setState({progressStep: this.state.progressStep + 1})

  }
  onClickPrev= () => {
    this.setState({progressStep: this.state.progressStep - 1})
  }

  render() {
    const {progressStep} = this.state;
    return (
      <div>
        <Progress states={this.progressStates} active={progressStep} />
        {this.needShowPrev && <button onClick={this.onClickPrev}>prev</button> }
        <button onClick={this.onClickNext}>next</button>
      </div>
    );
  }
}

const Progress = ({states, active}) => {
  //state = {active: 0}
  const points= states.map((s, i) => <ProgressEntry name={s} active={i <= active } />)
  return (
    <div class="b-progress">
      { points }
    </div>
  )
}


const ProgressEntry= ({name, active = false }) => {
  const className = active ? "__active" : ""
  return (
    <div class={`progress-entry ${className}`}>
      <div class="progress-connector"/>
      <div class="progress-el">
        <span class="progress-text">{name}</span>
        <div class="progress-circle"/>
      </div>
    </div>
  )
}

export default App;
