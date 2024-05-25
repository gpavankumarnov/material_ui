import React, { useState } from "react";
import { Button, IconButton} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";


/**
 * Scenario -
 * Togglebutton & ToggleButtonGroup
 * lets say we have editor and we have to use B, I, Underlined
 * lets import those icons.
 *
 *
 */

const ButtonComp = () => {
  const [format, setFormat] = useState<string[]>([]);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    // The ToggleButton component from MUI doesn't have a value prop.
    //console.log(_event.target.value)
    setFormat(updatedFormats);
  };

  return (
    <>
      <div>
        <Button href="www.google.com" variant="text">
          Text
        </Button>
        <Button href="www.google.com" variant="contained">
          contained
        </Button>
        <Button href="www.google.com" variant="outlined">
          outlined
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" color="primary">
          Primary
        </Button>
        <Button variant="contained" size="medium" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" size="medium" color="success">
          Success
        </Button>
        <Button variant="contained" size="small" color="info">
          info
        </Button>
        <Button variant="contained" size="large" color="warning">
          warning
        </Button>
      </div>
      <div>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
      <div>
        <IconButton color="success" size="large">
          {<SendIcon />}
        </IconButton>
      </div>

    </>
  );
};

export default ButtonComp;
