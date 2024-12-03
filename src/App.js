import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0); 

  const handleChange = (event) => {
    setInputValue(event.target.value); 
  };

  // A helper function to clear the input
  const clearInput = () => setInputValue("");

  // Function to check if the input is a valid number
  const isValidNumber = (input) => {
    return !isNaN(input) && input.trim() !== "";
  };

  const handleAdd = () => {
    if (isValidNumber(inputValue)) {
      setResult(result + parseInt(inputValue));
      clearInput();
    } else {
      alert("Please enter a valid number.");
    }
  };

  const handleSubtract = () => {
    if (isValidNumber(inputValue)) {
      setResult(result - parseInt(inputValue));
      clearInput();
    } else {
      alert("Please enter a valid number.");
    }
  };

  const handleMultiply = () => {
    if (isValidNumber(inputValue)) {
      setResult(result * parseInt(inputValue));
      clearInput();
    } else {
      alert("Please enter a valid number.");
    }
  };

  const handleDivide = () => {
    if (isValidNumber(inputValue)) {
      if (parseInt(inputValue) === 0) {
        alert("Cannot divide by zero!");
      } else {
        setResult(result / parseInt(inputValue));
        clearInput();
      }
    } else {
      alert("Please enter a valid number.");
    }
  };

  const handleResetInput = () => {
    clearInput();
  };

  const handleResetResult = () => {
    setResult(0);
  };

  return (
    <div className="calculator">
      <h1>Simplest Working Calculator</h1>
      <p>Result: {result}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange} 
        placeholder="Enter a number"
      />
      <br />
      <br />
      <div className="buttons">
      <button className="operation" onClick={handleAdd}>Add</button>
      <button className="operation" onClick={handleSubtract}>Subtract</button>
      <button className="operation" onClick={handleMultiply}>Multiply</button>
      <button className="operation" onClick={handleDivide}>Divide</button>
      <button className="reset" onClick={handleResetInput}>Reset Input</button>
      <button className="reset" onClick={handleResetResult}>Reset Result</button>
      </div>
    </div>
  );
}

export default App;
