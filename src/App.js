// App.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const data = useSelector(state => state);
  console.log('data===>>>>>', data)
  const count = useSelector(state => state.count.count);
  console.log('count', count)
  const dispatch = useDispatch();

  const incrementAsync = () => {
    dispatch({ type: 'API_CALL_ASYNC' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <div>
      <div>Count: {count}</div>
      <br />
      <button onClick={incrementAsync}>API CALL</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <br />
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default App;
