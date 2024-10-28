import React, { useEffect, useState } from 'react';
import { getMessage } from './api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const data = await getMessage();
      if (data) {
        setMessage(data.message);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to My Portfolio</h1>
      <p>{message ? `Message from the backend : ${message}` : 'Loading message...'}</p>
    </div>
  );
}

export default App;
