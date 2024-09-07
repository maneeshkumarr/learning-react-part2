import React from 'react';

export default function Ternary() {
  const isLogged = true;
  const score = 100;

  const pass = {
    background: 'green',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    margin: '5px 0'
  };

  const fail = {
    background: 'red',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    margin: '5px 0'
  };

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto'
  };

  const headerStyle = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Ternary Operator in React</h2>
      <div>
        <p>
          The ternary operator is a shorthand for conditional statements. It allows you to write concise conditional expressions.
        </p>
        <p>
          The syntax is: <code>condition ? exprIfTrue : exprIfFalse</code>
        </p>
        <p>
          For example, we can use the ternary operator to display a message based on the user's login status:
        </p>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          {isLogged ? <span style={{ color: 'green' }}>Welcome back!</span> : <span style={{ color: 'red' }}>Please register.</span>}
        </div>
      </div>
      <div>
        <h3>Grade Evaluation</h3>
        {score >= 90 ? (
          <p style={pass}>Grade: A</p>
        ) : score >= 80 ? (
          <p style={pass}>Grade: B</p>
        ) : score >= 70 ? (
          <p style={pass}>Grade: C</p>
        ) : (
          <p style={fail}>Failed</p>
        )}
      </div>
    </div>
  );
}
