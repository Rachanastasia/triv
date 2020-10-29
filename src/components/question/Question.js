import React, { Fragment, useState } from 'react'
import Answers from './Answers';
import Result from './Result';

function Question(props) {

    //answer was correct bool
    const [answer, setAnswer] = useState(null)

    //merge and sort right and wrong answers
    let answers = [...props.question.incorrect, props.question.correct].sort();

    const checkAnswer = (selected) => {
        if (selected === null) {
            return true;
        }

        return answers[selected] === props.question.correct ? setAnswer(true) : setAnswer(false);
    }

    const handleNext = () => {
        props.next(answer);
        setAnswer(null)

    }

    return (
        <Fragment>
            <h2>{props.question.question}</h2>
            {answer === null
                ? <Answers answers={answers} check={(s) => checkAnswer(s)} />
                : <Result answer={answer} correct={props.question.correct} next={handleNext} />}
        </Fragment>
    )
}


export default Question;


Question.defaultProps = {
    question: {
        question: "What is the national animal of Scotland?",
        incorrect: ["Bear", "Rabbit", "Seal"],
        correct: "Unicorn"
    }
}
