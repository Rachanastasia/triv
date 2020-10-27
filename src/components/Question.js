import React, { Fragment, useState } from 'react'
import { GrCaretNext } from 'react-icons/gr';

function Question(props) {
    const [answered, setAnswered] = useState(null);
    const [selected, setSelected] = useState(null);
    let answers = [...props.question.incorrect, props.question.correct].sort();

    const handleNext = () => {
        setAnswered(null);
        props.next();
    }

    return (
        <section>
            <h2>{props.question.question}</h2>

            {answered === 'right'
                ? <Fragment>
                    <h3>That's right!</h3>
                    <div className='answer'><p>{props.question.correct}</p></div>
                    <button onClick={handleNext} >
                        <GrCaretNext className='icon' />
                    </button>
                </Fragment>
                : answered === 'wrong'
                    ? <Fragment>
                        <h3>Not quite</h3>
                        <h4>Correct answer :</h4>
                        <p>{props.question.correct}</p>
                        <button onClick={handleNext}>
                            <GrCaretNext className='icon' />
                        </button>
                    </Fragment>
                    :
                    <Fragment>
                        <ul>
                            <div className='answer'><li className='answer'>{answers[0]}</li></div>
                            <div className='answer'><li className='answer'>{answers[1]}</li></div>
                            <div className='answer'><li className='answer'>{answers[2]}</li></div>
                            <div className='answer'><li className='answer'>{answers[3]}</li></div>
                        </ul>
                        <button onClick={() => setAnswered('right')}>Submit</button>
                    </Fragment>
            }
        </section >
    )
}

export default Question
