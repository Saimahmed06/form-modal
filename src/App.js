import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled, } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';


const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 8;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 800,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];




export default function FormPropsTextFields() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
    
  };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='one'>


      <div className='text'>
        <TextField
          required
          id="outlined-required"
          label="text"
          defaultValue="text"
        
            style={{ width: 1000 }}

        />
       
     
      </div>
      <div>

        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

       
      </div>

      <div>

        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="outlined-required"
          label="text"
          defaultValue="text"
            style={{ width: 500 }}
        />
        
          <button type="button" onClick={handleOpen}>
            Add more file
          </button>
          
          <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
            // BackdropComponent={Backdrop}
          >
            <Box sx={style}>
              <button type="button" onClick={handleClose}>
                DONE
              </button> 
              <h2 id="unstyled-modal-title">add file</h2>
              <p id="unstyled-modal-description"></p>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={currency}
              onChange={handleChange}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={currency}
              onChange={handleChange}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-required"
              label="text"
              defaultValue="text"
                style={{ width: 400 }}
            />
            </Box>
            
          </StyledModal>
        
      </div>



      <div>
  
      <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


      </div>
        
        <div>
          <Button variant="contained">submit</Button>
        </div>
      </div>
    </Box>
    
  );
}
