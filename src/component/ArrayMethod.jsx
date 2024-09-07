import React from 'react';
import './ArrayMethod.css';
import appleImage from './img/Apple.jpg'; // Importing image

export default function ArrayMethod() {
  const myArray = ['Apple', 'Banana', 'Orange', 'Mango'];

  const value = [1, 2, 3, 4, 5];

  const studentDetails = [
    {
      regno: 1,
      name: 'Manish',
      phone: 8792489207,
      email: 'manishpersonal638@gmail.com'
    },
    {
      regno: 2,
      name: 'Ravi',
      phone: 8792489208,
      email: 'ravipersonal638@gmail.com'
    },
    {
      regno: 3,
      name: 'Priya',
      phone: 8792489209,
      email: 'priyapersonal638@gmail.com'
    }
  ];

  return (
    <div className="array-method-container">
      <h2>Fruits:</h2>
      <div className="fruits-container">
        {myArray.map((item, index) => (
          <div key={index} className="fruit-item">
            <img src={appleImage} alt="fruit" className="fruit-image" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="notes-container">
        <div className="note">
          <p>
            Fruits are an essential part of a balanced diet and are rich in vitamins and minerals.
          </p>
          <p>
            They provide essential nutrients and can help reduce the risk of chronic diseases.
          </p>
        </div>
      </div>

      <h2>Squared Values:</h2>
      <ul className="squared-values-list">
        {value.map((num) => (
          <li key={num}>
            {num} * {num} = {num * num}
          </li>
        ))}
      </ul>
      <div className="notes-container">
        <div className="note">
          <p>
            Squaring a number means multiplying it by itself.
          </p>
          <p>
            For example, 3 squared is 3 * 3 = 9.
          </p>
        </div>
      </div>

      <h2>Student Details:</h2>
      <table className="student-details-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Reg. No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((student, index) => (
            <tr key={student.regno}>
              <td>{index + 1}</td>
              <td>{student.regno}</td>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="notes-container">
        <div className="note">
          <p>
            Displaying student details in a tabular format.
          </p>
          <p>
            Each row represents a student with their registration number, name, phone number, and email.
          </p>
        </div>
      </div>
    </div>
  );
}
