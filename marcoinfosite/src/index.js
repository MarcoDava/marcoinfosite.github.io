import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Main from './Components/Main';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <main>
      <Main />
    </main>
    <Footer />
  </div>
);


