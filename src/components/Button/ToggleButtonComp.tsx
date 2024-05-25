import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const ButtonComp = () => {
  const [format, setFormat] = useState<string>("bold");
  const [selected, setSelected] = useState<boolean>(false);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string
  ) => {
    setFormat(updatedFormats);
  };

  console.log("formats are", selected);

  return (
    <>
      <div>
        <ToggleButton value= {selected} onChange={() => setSelected(!selected)}>
          <AccountCircleIcon />
        </ToggleButton>
      </div>
      <div>
        <ToggleButtonGroup
          value={format}
          onChange={handleFormatChange}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
};

export default ButtonComp;
