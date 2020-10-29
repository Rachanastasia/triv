import React, { Fragment } from 'react'

function Start(props) {
    return (
        <section>
            <p>Triv is a trivia game that generates a sequesnce of 10 randomly generated multiple choice questions.</p>
            <p>If you answer the question correctly, you won't see it again. Ofter 10 questions, you can view your score.</p>
            <p>Click the button below to start a new game.</p>
            <button onClick={() => props.playing(true)}>Start Game</button>
        </section>
    )
}

export default Start
