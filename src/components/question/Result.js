import React, { Fragment } from 'react'

function Result(props) {
    return (
        <Fragment>
            {props.answer
                ? <div className='result'>
                    <h3>That's correct!</h3>
                    <p>{props.correct}</p>
                    <button onClick={props.next}>Next</button>
                </div>

                : <div className='result'>
                    <h3>Not quite!</h3>
                    <h4>The correct answer is :</h4>
                    <p>{props.correct}</p>
                    <button onClick={props.next}>Next</button>
                </div>
            }
        </Fragment>
    )
}

export default Result
