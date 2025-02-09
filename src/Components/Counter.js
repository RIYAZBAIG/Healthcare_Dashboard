import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello Counter....</h1>
      <button onClick={() => setCount(count + 1)} >Increament</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)} >Dicreament</button>

    </div>
  );
}

export default Counter;
