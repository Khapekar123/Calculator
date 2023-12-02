// Calculator.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input); // Warning: Using eval() for demonstration purposes only, not recommended for production
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="calculator border p-4 text-center">
        <h2 className="mb-4">Simple Calculator</h2>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter an expression"
          className="form-control mb-3"
        />
        <div className="row mb-3">
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={() => setInput(input + '7')}>7</button>
          </div>
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={() => setInput(input + '8')}>8</button>
          </div>
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={() => setInput(input + '9')}>9</button>
          </div>
          <div className="col">
            <button className="btn btn-danger btn-block" onClick={() => setInput(input + '/')}>/</button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={() => setInput(input + '4')}>4</button>
          </div>
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={() => setInput(input + '5')}>5</button>
          </div>
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={() => setInput(input + '6')}>6</button>
          </div>
          <div className="col">
            <button className="btn btn-danger btn-block" onClick={() => setInput(input + '*')}>*</button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={() => setInput(input + '1')}>1</button>
          </div>
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={() => setInput(input + '2')}>2</button>
          </div>
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={() => setInput(input + '3')}>3</button>
          </div>
          <div className="col">
            <button className="btn btn-danger btn-block" onClick={() => setInput(input + '-')}>-</button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={() => setInput(input + '0')}>0</button>
          </div>
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={() => setInput(input + '.')}>.</button>
          </div>
          <div className="col">
            <button className="btn btn-primary btn-block" onClick={handleCalculate}>=</button>
          </div>
          <div className="col">
            <button className="btn btn-danger btn-block" onClick={() => setInput(input + '+')}>+</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-secondary btn-block" onClick={clearInput}>Clear</button>
          </div>
        </div>
        <div className="mt-3">Result: {result}</div>
      </div>
    </div>
  );
};

export default Calculator;
