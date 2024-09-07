import React from 'react'
import {Typography,Box,TextField,Button, Paper} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



export default function Muii() {
  return (

    <Paper>
<center>
  <Box  sx={{mt:3}}>
    <Typography variant="h5" gutterBottom size="small"  sx={{color:'red'}}>
    Grade Volleyball Registration Form
  </Typography >
<h5>participant name</h5>
  <TextField id="outlined-basic" label="First Name" variant="outlined" size="small" />
  <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small" /><br />
  <TextField
          id="outlined-number"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /> <br />
<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>

  <br /><TextField id="outlined-basic" label="Email " variant="outlined" size="small" />
  <br />
  <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> <br />
  <Button variant="contained" color="success">
        Register
      </Button> 
  </Box>
  </center>
  </Paper> 

  
  
  

  )
}
