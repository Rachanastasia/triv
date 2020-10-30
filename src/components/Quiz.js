import React, { useState, useEffect } from 'react';
import Data from '../Apprentice_TandemFor400_Data.json';
import Question from './question/Question';
import Results from './Results';


function Quiz(props) {

    //removes question that is in default props of question.js
    const data = [...Data.slice(0, 15), ...Data.slice(17)]

    const [i, seti] = useState(0);
    const [questions, setQuestions] = useState(data);
    const [question, setQuestion] = useState(Math.ceil(Math.random() * questions.length - 1));
    const [score, setScore] = useState(0);

    //resets questions data and i to 0
    useEffect(() => {
        setQuestions(data)
        setScore(0)
        return () => seti(0)
    }, [])


    const onNext = (ans) => {
        //removes question from randomized arr if correct
        if (ans === true) {
            setScore(score + 1)
            let q = questions
            q.splice(question, 1)
            setQuestions(q)
        }
        setQuestion(Math.ceil(Math.random() * questions.length - 1));
        seti(i + 1)
    }

    const playAgain = () => {
        props.playing(false)
    }
    console.log('counter', i, 'score', score)
    return (
        <section>
            {i <= 9
                ? <Question question={questions[question]} next={(ans) => onNext(ans)} />
                : <Results playAgain={playAgain} score={score} />
            }
        </section>

    )
}

export default Quiz
