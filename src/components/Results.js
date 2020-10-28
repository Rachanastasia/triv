import React from 'react'

function Results(props) {
    return (
        <section>
            <h1>Results</h1>
            <button onClick={() => props.playAgain(false)}>Start Game</button>
        </section>
    )
}

export default Results;
