import React from 'react';
import './ArrayFunction.css'; // Importing CSS file

export default function ArrowFunction() {
  const arrowFunctionTesting = (message) => {
    alert(message);
  }

  return (
    <center>
    <div className="container">
      <h1>Arrow Functions in React</h1>
      <p>
        Arrow functions provide a concise way to write functions and are commonly used in React for defining component methods and event handlers.
      </p>
      <ul>
        <li>Arrow functions do not have their own <code>this</code> context.</li>
        <li>They are defined using the <code>=></code> syntax.</li>
        <li>They provide a more readable and concise way to handle functions within components.</li>
        <li>Arrow functions make it easier to work with higher-order functions like <code>map</code>, <code>filter</code>, and <code>reduce</code>.</li>
        <li>They help avoid common pitfalls with <code>this</code> binding in JavaScript.</li>
      </ul>
      <button className="greet-button" onClick={() => arrowFunctionTesting('hello')}>Greet</button>
    </div>
    </center>
  );
}
