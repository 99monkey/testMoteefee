import React, { Component } from 'react';

const Progress = ({states, active, onClick}) => {
  const points= states.map((s, i) => <ProgressEntry key={i} name={s} index={i}  active={i <= active } onClick={onClick} isClickable={Math.abs(i - active) == 1}  />)
  return (
    <div className="b-progress">
      { points }
    </div>
  )
}


const ProgressEntry= ({name, index, onClick, active = false, isClickable = false }) => {
  const className = active ? "__active" : ""
  const callback = isClickable ? () => {onClick(index)} : () =>{}
  return (
    <div className={`progress-entry ${className}`}>
      <div className="progress-connector"/>
      <a onClick={ callback } className="progress-el">
        <span className="progress-text">{name}</span>
        <div className="progress-circle"/>
      </a>
    </div>
  )
}

export default Progress
