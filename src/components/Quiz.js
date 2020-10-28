import React, { useState, useEffect } from 'react';
import Data from '../Apprentice_TandemFor400_Data.json';
import Question from './Question';
import Results from './Results';


function Quiz(props) {

    //removes question that is in default props of question.js
    const data = [...Data.slice(0, 15), ...Data.slice(17)]

    const [i, seti] = useState(0);
    const [questions, setQuestions] = useState(data);
    const [question, setQuestion] = useState(Math.ceil(Math.random() * questions.length));

    //resets questions data and i to 0
    useEffect(() => {
        setQuestions(data)
        return () => seti(0)
    }, [])



    const onNext = (correct = true) => {
        if (correct) {
            let q = questions
            q.splice(question, 1)
            setQuestions(q)
        }

        setQuestion(Math.ceil(Math.random() * questions.length));
        seti(i + 1)
    }

    const playAgain = () => {
        props.playing(false)
    }

    return (
        <section>
            {i <= 10
                ? <Question question={questions[question]} next={onNext} />
                : <Results playAgain={playAgain} />
            }
        </section>

    )
}

export default Quiz
