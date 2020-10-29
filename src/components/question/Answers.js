import React, { Fragment, useState } from 'react'

function Answers(props) {
    const [selected, setSelected] = useState(null);

    const handleSubmit = () => {
        console.log(selected)
        props.check(selected);
    }

    return (
        <Fragment>
            <ul>
                <div className='answer' onClick={() => setSelected(0)}><li className={selected === 0 ? 'answer active' : 'answer'}>{props.answers[0]}</li></div>
                <div className='answer' onClick={() => setSelected(1)}><li className={selected === 1 ? 'answer active' : 'answer'}>{props.answers[1]}</li></div>
                <div className='answer' onClick={() => setSelected(2)}><li className={selected === 2 ? 'answer active' : 'answer'}>{props.answers[2]}</li></div>
                {props.answers[3]
                    ? <div className='answer' onClick={() => setSelected(3)}><li className={selected === 3 ? 'answer active' : 'answer'}>{props.answers[3]}</li></div>
                    : null}
            </ul>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </Fragment>
    )
}

export default Answers
