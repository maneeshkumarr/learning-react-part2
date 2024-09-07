import React from 'react'

export default function Local() {
const myObject=[
    {name:'xyz',age:'30',adress:'manglore'},
    {name:'xyz',age:'30',adress:'manglore'},
    {name:'xyz',age:'30',adress:'manglore'},
]

    localStorage.setItem('SDM',JSON.stringify(myObject));


    var val=JSON.parse(localStorage.getItem('SDM'));
    // localStorage.removeItem('SDM')
    console.log(val);
  return (



    <div><center>Local
        
        {/* <h1>{localStorage.getItem('SDM')}</h1> */}
        
        </center></div>
  )
}
