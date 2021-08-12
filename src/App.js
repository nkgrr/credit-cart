import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import './App.css';
import 'react-credit-cards/es/styles-complied.css'

function App() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [focus, setFocus] = useState('');
  return (
<div className="App">

</div>
  );
}

export default App;
