import React, { useState } from 'react'
import {Typography,Box,TextField,Button, Paper} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function StateHooks() {

const [stateVariable,setStateVariable]=useState(0);

const [data,setData]=useState({});



const handleInc = () =>{
    setStateVariable(stateVariable+1);
}

const Textchnage = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
}

console.log(data);
  return (
    <div>
<center>
    <h3>StateHooks</h3>
        <h1>counter:{stateVariable}</h1>
        <button onClick={handleInc}>Increment</button>
        </center>

        <Paper>
<center>
  <Box  sx={{mt:3}}>
    <Typography variant="h5" gutterBottom size="small"  sx={{color:'red'}}>
    Grade Volleyball Registration Form
  </Typography >
<h5>participant name</h5>
  <TextField onChange={Textchnage} name='name' id="outlined-basic" label="Name" variant="outlined" size="small" /><br />
  <TextField onChange={Textchnage} name='age'
          id="outlined-number"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /> <br />


  <br /><TextField onChange={Textchnage} name='Email' id="outlined-basic" label="Email " variant="outlined" size="small" />
  <br />
  <TextField onChange={Textchnage} name='password'
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> <br />
  <Button >
        Register
      </Button>
  
  
  
  
  
  </Box>
  </center>
  </Paper> 
    </div>

  )
}
