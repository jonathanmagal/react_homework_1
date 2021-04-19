
import './App.css';
import Counter from './counter';
import Counters from './counters';
import React, { Component } from 'react';
import './style.css'


export default function App() {
  const [totalCount, setTotalCount] = React.useState(0);
  const onButtonClickedpositive = () => {
    setTotalCount(totalCount + 1);
  }
  const onButtonClickednegative = () => {
    setTotalCount(totalCount - 1);
  }


  return (
    <div className="App">
      <h1>welcome to the counter app</h1>
      <Counter onButtonClickedpositive={onButtonClickedpositive} onButtonClickednegative={onButtonClickednegative} title="first counter" />
      <Counter onButtonClickedpositive={onButtonClickedpositive} onButtonClickednegative={onButtonClickednegative} title="second counter" />
      <Counter onButtonClickedpositive={onButtonClickedpositive} onButtonClickednegative={onButtonClickednegative} title="third title" />
      <h1>total: {totalCount}</h1>
    </div>
  )
}







