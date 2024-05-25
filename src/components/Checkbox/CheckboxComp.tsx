import React, { useState } from "react";
import { Checkbox, FormGroup, FormControl, FormControlLabel, FormLabel } from "@mui/material";

const CheckboxComp = () => {
  const [acceptTms, setAcceptTms] = useState(false);
  const [ skills, setSkills] = useState<string[]>([])

  const handleChange = () => {
    setAcceptTms(!acceptTms)
  };

const handleSkillsChange = (event:React.ChangeEvent<HTMLInputElement>) => {
const index = skills.indexOf(event.target.value)
if(index === -1){
    setSkills([...skills, event.target.value])
}else{
setSkills(skills.filter((skill) => skill !== event.target.value))
}
}


  console.log(skills)

  return (
    <>
    <div>
      <FormControlLabel
        label="I accept terms and conditions"
        control={<Checkbox checked={acceptTms} onChange={handleChange} />}
      ></FormControlLabel>
    </div>
    <div>
        <FormControl>
            <FormLabel> Skills </FormLabel>
                <FormGroup>
                <FormControlLabel
        label="html" value="html"
        control={<Checkbox checked={skills.includes('html')} onChange={handleSkillsChange} />}
      ></FormControlLabel> 
                <FormControlLabel
        label="css" value="css"
        control={<Checkbox checked={skills.includes('css')} onChange={handleSkillsChange} />}
      ></FormControlLabel>
                <FormControlLabel
        label="js" value="js"
        control={<Checkbox checked={skills.includes('js')} onChange={handleSkillsChange} />}
      ></FormControlLabel>
                </FormGroup>
           
        </FormControl>
    </div>
    </>
  );
};

export default CheckboxComp;
