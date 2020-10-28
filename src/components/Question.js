import React, { Fragment, useState } from 'react'
import { GrCaretNext } from 'react-icons/gr';

function Question(props) {
    const [answered, setAnswered] = useState(null);
    let answers = [...props.question.incorrect, props.question.correct].sort();

    const handleNext = () => {
        setAnswered(null);
        props.next();
    }
    const checkAnswered = () => {
        return;
    }

    return (
        <Fragment>
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
                            <div className='answer' disabled={answered !== null} onClick={checkAnswered}><li className='answer'>{answers[0]}</li></div>
                            <div className='answer' disabled={answered !== null} onClick={checkAnswered}><li className='answer'>{answers[1]}</li></div>
                            <div className='answer' disabled={answered !== null} onClick={checkAnswered}><li className='answer'>{answers[2]}</li></div>
                            <div className='answer' disabled={answered !== null} onClick={checkAnswered}><li className='answer'>{answers[3]}</li></div>
                        </ul>
                        <div>
                            <button onClick={() => setAnswered('right')}>Submit</button>
                        </div>
                    </Fragment>
            }
        </Fragment>
    )
}

//class flag
//button relative to div

export default Question;


Question.defaultProps = {
    question: {
        question: "What is the national animal of Scotland?",
        incorrect: ["Bear", "Rabbit", "Seal"],
        correct: "Unicorn"
    }
}
