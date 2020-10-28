import React, { Fragment } from 'react'

function Start(props) {
    return (
        <section>
            <h2>Start</h2>
            <button onClick={() => props.playing(true)}>Start Game</button>
        </section>
    )
}

export default Start
