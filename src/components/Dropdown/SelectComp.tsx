import { Box, TextField, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

const SelectComp = () => {
  //const [country, setCountry] = useState("")
  //const [countries, setCountries] = useState<string[]>([]);
  const [country, setCountry] = useState<string[]>([]);
console.log(country)
  const handleChange = (event: SelectChangeEvent<string>) => {
    const values = event.target.value as string[];
    setCountry(values);
  };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setCountries(typeof value === "string" ? value.split(",") : value);
//   };

  return (
    <Box>
      {/* <TextField fullWidth label="select country" value={countries} onChange={handleChange} select SelectProps={{multiple:true}} size="medium" color='primary' helperText="Please select the country" error={countries.length === 0} >
        <MenuItem value="IN"> India</MenuItem>
        <MenuItem value="US"> US</MenuItem>
        <MenuItem value="AU"> Australia</MenuItem>
      </TextField> */}
      <Select value={country} multiple onChange={handleChange}>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="transmale">Transmale</MenuItem>
      </Select>
    </Box>
  );
};

export default SelectComp;
