import React from 'react'

function Results(props) {
    return (
        <div className='results'>
            <h1>Results</h1>
            <h2>You got {props.score} correct</h2>
            <button onClick={() => props.playAgain(false)}>Start Game</button>
        </div>
    )
}

export default Results;
