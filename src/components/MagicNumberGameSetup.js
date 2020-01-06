import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from "@reach/router"

export default function MagicNumberSetup() {

    const dispatch = useDispatch();
    
    const maxNumber = useSelector(state => state.maxNumber );
    const numPerCol = useSelector(state => state.numPerCol );

    // const [txtMaxNumber, setTxtMaxNumber] = useState(0);
    // const [txtnumPerCol, setnumPerCol] = useState(0);

    const handleMaxNumberChange = (event) => {
        ///setTxtMaxNumber(event.value);
        dispatch({type: 'setMaxNum', payload: {num: event.target.value} } );
    };

    const handleNumPerColChange = (event) => {
        dispatch({type: 'setNumPerCol', payload: {num: event.target.value} } );
    };

    const handlePlayClick = (event) => {
        event.preventDefault();
        dispatch({type: 'resetRounds' });
        navigate('/play');
    }

    return(<div>

        <label>Max Number</label>
        <input type='number' value={maxNumber} onChange={handleMaxNumberChange} />
        
        <br />

        <label>Numbers per column</label>
        <input type='number' value={numPerCol} onChange={handleNumPerColChange} />

        <br />

        <button onClick={handlePlayClick}>Play</button>

    </div>);
}
