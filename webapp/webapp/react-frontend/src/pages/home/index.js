import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Home';
// ad esempio in src/pages/home/index.js
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('react-home'));
root.render(<HomePage />);
