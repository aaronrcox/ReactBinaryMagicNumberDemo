
import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';


export default function CounterDemo() {

  // this is waht we can use to invoke our reducer
  const dispatch = useDispatch();

  // get the counter variable from the store
  const count = useSelector(state => state.counter);

  const handleIncrement = () => dispatch({type: 'inc' });
  const handleDecrement = () => dispatch({type: 'dec'});

  return (
    <div className="App">
        <button onClick={handleIncrement}>Increment</button>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
