import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  function calc(){
    const p=document.getElementById("prin").value;
    const t=document.getElementById("time").value;
    const r=document.getElementById("rate").value;
    const si = (p*t*r)/100;
    setNumber(si);
  }
  const [number,setNumber]= useState(0);
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Simple Interest Calculator            
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="prin" label="Enter Principal Amount" variant="outlined" /> <br></br>     
      <TextField id="rate" label=" Enter the Rate " variant="outlined" /><br></br>
      <TextField id="time" label=" Enter the Time"  variant="outlined" />
      <br></br>
      <Button onClick={() => calc()} variant="outlined">Calculate</Button>
      

    </Box>
    <p> The interest amount : Rs. {number}</p>
    </div>
  );
}

export default App;
