import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/items')
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  // useEffect(() => {
  //   fetch('/api', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       field1: 'Yooooo',
  //       field2: 'Its ya boy!',
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, []);

  return (
    <div className="App">
      <h1>Task Time Estimator</h1>
      <p>{!data ? 'Loading...' : data}</p>
    </div>
  );
}

export default App;
