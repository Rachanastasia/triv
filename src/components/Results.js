import React from 'react'

function Results(props) {
    return (

        <section className='results'>
            <h1>Results</h1>
            <h2>You got {props.score} correct</h2>
            <button onClick={() => props.playAgain(false)}>Start Game</button>
        </section>
    )
}

export default Results;
