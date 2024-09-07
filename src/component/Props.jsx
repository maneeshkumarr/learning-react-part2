import React from 'react'
import PersonDetails from './PersonalDetails'
import AdditionalDetails from './Additional';

export default function Props() {
  const address="Managalore";
  const name1="Akshay";
  return (
    <div>
      <AdditionalDetails name={name1} />
      <PersonDetails address={address} />
      
    </div>
  )
}
