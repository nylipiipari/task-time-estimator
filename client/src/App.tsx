import { useEffect, useState } from 'react';
import styles from  './App.module.css';
import Header from './components/Header';
import Heading from './components/Heading';
import useFetch from './hooks/useFetch';

interface Item {
  id: number;
  name: string;
}

function App() {
  const { response: items } = useFetch('/items');

  return (
    <div className={styles.app}>
      <Header>
        <Heading>Task Time Estimator</Heading>
        {items && Object.keys(items).map((key, index) => <div key={items[key].id}>{items[key].name}</div>)}
      </Header>
    </div>
  );
}

export default App;