import React, { useState } from 'react'
import { validateExpression } from '../_helper'
import { KEYPAD, OPERATORS } from '../_constant/index,'
import { getRendonInt } from '../_services'

function ExpressionEvaluator() {
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const getRandomValue = async () => {
        const intVal = await getRendonInt();
        setText(`${text}${parseInt(intVal)}`)
    }


    return (
        <div>
            <h4>Calculate</h4>
            <div>
                <input value={text} className='form-control' onChange={onChange} placeholder='Write expression here...' />
            </div>
            <div className='expression'>
                {text ? <div>{validateExpression(text)}</div> : null}
            </div>

            <div className='keypad-wrapper'>
                <div className='keypad-container'>
                    {KEYPAD.map((x, index) => <button key={index} onClick={() => setText(text + x)} className='number-button' disabled={!x}><span>{x}</span></button>)}
                </div>
            </div>


            <div className='operators-wrapper'>
                <div className='operators-container'>
                    {OPERATORS.map((x, index) =>
                        <div>
                            <button key={index} onClick={() => setText(text + x)} className='button' disabled={!x}><span>{x}</span></button>
                        </div>
                    )}
                </div>

                <div className='buttons-container'>
                    <button className='button' onClick={() => setText("")}>Clear</button>
                    <button className='button' onClick={() => getRandomValue()}>Rnd()</button>
                </div>
            </div>
        </div >
    );
}

export default ExpressionEvaluator;
