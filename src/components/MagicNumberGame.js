import React from 'react';
import MagicNumberCard from './MagicNumbrCard';

import { useSelector, useDispatch } from 'react-redux';

export default function MagicNumberGame() {

    const dispatch = useDispatch();
    
    const numPerCol = useSelector(state => state.numPerCol);
    const maxNumber = useSelector(state => state.maxNumber);
    const round = useSelector(state => state.round);
    const numbers = useSelector(state => state.numbers);

    const pow = Math.pow(2, round);
    const guess = numbers.reduce((a, b) => a + b, 0);

    let msg = '';
    if(pow >= maxNumber ) {
        msg = 'your number is: ' + guess;
    }

    const handleYesClick = (event) => {
        event.preventDefault();
        dispatch({type: 'addNumber', payload: {num: pow}});
        dispatch({type: 'nextRound'});
    }

    const handleNoClick = (event) => {
        event.preventDefault();
        dispatch({type: 'nextRound'});
    }

    const handleResetClick = (event) => {
        event.preventDefault();
        dispatch({type: 'resetRounds'});
    }

    
    return(<div>

        { msg.length > 0 && 
            <h1>{msg}</h1>
        }

        { msg.length === 0 && 
            <div>
                <MagicNumberCard pow={pow} cols={numPerCol} max={maxNumber} ></MagicNumberCard>

                <p>
                    is your number in the grid?
                </p>
                <button onClick={handleYesClick} >Yes</button>
                <button onClick={handleNoClick}>No</button>
            </div>
        }

        
        <button onClick={handleResetClick}>Reset</button>

    </div>);
}