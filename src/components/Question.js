import React, { Fragment, useState } from 'react'
import { GrCaretNext } from 'react-icons/gr';

function Question(props) {
    const [answered, setAnswered] = useState(null);
    const [selected, setSelected] = useState(null);
    let answers = [...props.question.incorrect, props.question.correct].sort();

    return (
        <section>
            <h2>{props.question.question}</h2>
            <ul>
                <li>{answers[0]}</li>
                <li>{answers[1]}</li>
                <li>{answers[2]}</li>
                <li>{answers[3]}</li>
            </ul>
            {answered === 'right'
                ? <Fragment><h3>That's right!</h3> <GrCaretNext onClick={props.next} /></Fragment>
                : answered === 'wrong'
                    ? <Fragment><h3>Not quite</h3><h4>Correct answer :</h4><p>{props.question.correct}</p> <GrCaretNext onClick={() => props.next, setAnswered(null)} /></Fragment>
                    : <button onClick={() => setAnswered('right')}>Submit</button>}
        </section>
    )
}

export default Question
