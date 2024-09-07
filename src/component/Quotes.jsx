import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Height } from '@mui/icons-material';

export default function Quotes() {
  const [data, setData] = useState([]);
  const [topQuote, setTopQuote] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/quotes')
      .then((res) => {
        setData(res.data.quotes);
        setTopQuote(res.data.quotes[Math.floor(Math.random() * res.data.quotes.length)]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const refreshTopQuote = () => {
    if (data.length > 0) {
      setTopQuote(data[Math.floor(Math.random() * data.length)]);
    }
  };

  return (
    <div>
      <div style={styles.topCard}>
        <h4>{topQuote?.quote}</h4>
        <button onClick={refreshTopQuote} style={styles.refreshButton}>
          Refresh
        </button>
      </div>

      <div style={styles.quotesContainer}>
        {data.map((item) => (
          <div key={item.id} style={styles.card}>
            <h4>{item.quote}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  topCard: {
    padding: '40px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  refreshButton: {
    padding: '10px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'black',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  quotesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    padding: '20px',
    margin: '10px',
    border: '2px solid black',
    borderRadius: '5px',
    width: '200px',
    Heighteight:'200px'
  },
};
