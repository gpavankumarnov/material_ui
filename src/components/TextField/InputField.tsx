import React, {useState} from "react";
import { InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

const InputField = () => {

  const [ value, setValue] = useState("")

  return (
    <>
      <div>
        <TextField
          label="name"
          variant="filled"
          size="small"
          color="secondary"
        />
        <TextField
          label="name"
          variant="outlined"
          helperText="Do not share information with anyone"
        />
        <TextField label="name" variant="standard" required />
        <TextField label="password" type="password" required />
        <TextField
          label="readonly"
          type="password"
          required
          inputProps={{ readOnly: "true" }}
        />
      </div>

      <div>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: (<InputAdornment position="start">$</InputAdornment>),
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">kgs</InputAdornment>
            ),
          }}
        />
        <TextField label="password" type="password" variant="filled" color="success" size="medium" InputProps={{endAdornment: <InputAdornment position="end"><VisibilityIcon/></InputAdornment>}}/>
      </div>
      <div>
        <TextField value={value} label="password" onChange={(e)=> setValue(e.target.value)} error={!value} helperText={!value ? "Required" : "Do not share your password"}/>
      </div>
    </>
  );
};

export default InputField;
