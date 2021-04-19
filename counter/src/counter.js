import React, { Component } from "react"
import './style.css'


export default function App(props) {
    const { title, onButtonClickedpositive, onButtonClickednegative } = props;
    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount(count + 1)
        onButtonClickedpositive()
    }

    const decrement = () => {
        setCount(count - 1)
        onButtonClickednegative()
    }

    console.log(props)

    return (
        <div class={count >= 5 ? "shit" : "shit5"}>
            <h4>{title}</h4>
            <div>Count {count} </div>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </div>
    )
}






