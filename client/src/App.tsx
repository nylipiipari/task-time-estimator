import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('/items')
      .then(res => res.json())
      .then(data => setItems(data.message));
  }, []);

  return (
    <div className="App">
      <h1>Task Time Estimator</h1>
    </div>
  );
}

export default App;