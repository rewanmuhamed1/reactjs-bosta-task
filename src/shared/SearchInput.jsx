import React from 'react';
import { Box, TextField, IconButton, Typography, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ title, placeholder }) => {
  const handleSearch = () => {
   
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 1, color: '#000' }}>
        {title}
      </Typography>
      <TextField
     
        variant="outlined"
        fullWidth
        placeholder={placeholder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end"  sx={{ 
              
                 padding: 0 
               }} >
              <IconButton 
                onClick={handleSearch} 
                sx={{ 
                 position:"relative",
                  backgroundColor: 'red', 
                  borderRadius: '4px', 
                  width: '50px', 
                  height: '40px', 
                  padding: 0 
                }}
              >
                <SearchIcon sx={{ fontSize: 20, color: "#fff" }} /> 
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SearchInput;
