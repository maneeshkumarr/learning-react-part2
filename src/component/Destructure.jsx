import React from 'react';
import './Destructure.css'; // Importing CSS file

export default function Destructure() {
  const myArray = [1, 2, 3, 4, 5];
  const [num1, num2, num3] = myArray;

  const myObject = {
    name: 'Manish Kumar',
    class1: 'III BCA',
    college: 'SDM',
    phone: '8792489207',
    email: 'maneeshpersonal638@gmail.com',
    address: 'Mangalore'
  }

  const { name, class1, college, phone, email, address } = myObject;

  return (
    <center>
    <div className="destructure-container">
      <h1><b>---DESTRUCTURE---</b></h1>
      <p>Hello, I am {name} pursuing {class1} at {college} college Ujire.</p>
      <p>Contact me through:</p>
      <ul>
        <li><b>Phone number:</b> {phone}</li>
        <li><b>Email:</b> {email}</li>
        <li><b>Address:</b> {address}</li>
      </ul>
    </div>
    </center>
  );
}
