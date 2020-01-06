import { createStore } from 'redux';

// this is the initial representation of our application state.
const initialAppState = {
    counter: 0,
    maxNumber: 32,
    numPerCol: 4,
    round: 0,
    numbers: []
};

export function reducer(state = initialAppState, action) {

    switch( action.type) {
        case 'inc': {
            return { ...state, counter: state.counter + 1 };
        }
        case 'dec': {
            return { ...state, counter: state.counter - 1 };
        }
        case 'setMaxNum': {
            return {...state, maxNumber: action.payload.num }
        }
        case 'setNumPerCol': {
            return {...state, numPerCol: action.payload.num }
        }
        case 'nextRound': {
            return {...state, round: state.round + 1 }
        }
        case 'resetRounds': {
            return {...state, round: 0, numbers: [] }
        }
        case 'addNumber': {
            const numbers = [...state.numbers];
            numbers.push(action.payload.num);
            return {...state, numbers };
        }
        default: return state;
    }


}


// this is thee store object
// that we will provide to our application.
export const store = createStore( reducer );

