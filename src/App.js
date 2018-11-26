import React, { Component } from 'react';
import Progress from './Progress.js';
import './App.css';



class App extends Component {
  state = {progressStep: 1}
  progressStates = ['Design', 'Build', 'Preview', 'Launch']

  get needShowPrev() {
    return this.state.progressStep > 0
  }

  get needShowNext() {
    return this.state.progressStep < this.progressStates.length - 1
  }

  onClickNext = () => {
    this.setState({progressStep: this.state.progressStep + 1})
  }
  onClickPrev= () => {
    this.setState({progressStep: this.state.progressStep - 1})
  }
  onChangeProgressStep = (newStep) => {
    this.setState({progressStep: newStep})
  }

  render() {
    const {progressStep} = this.state;
    return (
      <div>
        <Progress states={this.progressStates} active={progressStep} onClick={this.onChangeProgressStep} />
        {this.needShowPrev && <button onClick={this.onClickPrev}>prev</button> }
        {this.needShowNext && <button onClick={this.onClickNext}>next</button> }
      </div>
    );
  }
}

export default App;
