import React, { Fragment } from 'react'

function Result(props) {
    return (
        <Fragment>
            {props.answer
                ? <Fragment>
                    <h2>That's correct!</h2>
                    <p>{props.correct}</p>
                    <button onClick={props.next}>Next</button>
                </Fragment>

                : <Fragment>
                    <h2>Not quite!</h2>
                    <h3>The correct answer is :</h3>
                    <p>{props.correct}</p>
                    <button onClick={props.next}>Next</button>
                </Fragment>
            }
        </Fragment>
    )
}

export default Result
