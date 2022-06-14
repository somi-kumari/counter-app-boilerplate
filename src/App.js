import "./App.css";
import React, { useState } from 'react';
function App() {
  const [X, setX] = useState(0);
  const onClick = (val) => {
    if (X > 0) {
      setX(X + val);

    }
    else if (X == 0 && val == 1) {
      setX(X + val);
    }
  }
  return (
    <div className="App">
      <h2 data-testid="counter-value">{X}</h2>
      <button data-testid="counter-decrement-button" onClick={() => onClick(-1)}>-</button>
      <button data-testid="counter-increment-button" onClick={() => onClick(1)}>+</button>
    </div>
  );
}

export default App;
