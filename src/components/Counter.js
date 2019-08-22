import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div data-testid="testid" className="counter">
      <div data-testid="countervalue" className="count">
        {count}
      </div>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;
