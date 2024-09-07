import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

export default function SpreadOperator() {
  // SpreadOperator
  const num1 = [1, 2, 3, 4, 5];   
  const num2 = [6, 7, 8, 9];
  const resultArray = [...num1, 10, 20, 30, 40, ...num2];   
  const [a, b, ...rest] = num1;

  const student = {
    regno: 10,
    name: 'Manish',
    address: 'Mysore'
  }

  const details = {
    phone: 9876543210,
    email: 'manish@example.com',
    address: 'Mysore'
  }

  const studentdetails = { ...student, ...details };

  console.log(studentdetails);

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#f0f2f5' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Array Spread Operator
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>num1:</strong> {JSON.stringify(num1)}<br />
                <strong>num2:</strong> {JSON.stringify(num2)}<br />
                <strong>resultArray:</strong> {JSON.stringify(resultArray)}<br />
                <strong>a:</strong> {a}<br />
                <strong>b:</strong> {b}<br />
                <strong>rest:</strong> {JSON.stringify(rest)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#f0f2f5' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Object Spread Operator
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>student:</strong> {JSON.stringify(student)}<br />
                <strong>details:</strong> {JSON.stringify(details)}<br />
                <strong>studentdetails:</strong> {JSON.stringify(studentdetails)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ backgroundColor: '#e0f7fa' }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Student Details
              </Typography>
              <Typography variant="body1">
                Hello, I'm {student.name} and my registration number is {student.regno}.
                I'm from {student.address} and my contact number is {details.phone}.
                My email id is {details.email}.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
