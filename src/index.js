import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './utility.css'
import Home from './routes/Home/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
