import React, { useState } from 'react';

function App() {
  const [conta, setConta] = useState(0);
  return (
    <div className="App">
      <span>{conta}</span>
      <button onClick={() => setConta(conta + 1)}>contar</button>
    </div>
  );
}

export default App;
