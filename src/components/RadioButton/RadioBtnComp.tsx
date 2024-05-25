import { Box, FormControl, FormLabel,FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, {useState} from 'react'

const RadioBtnComp = () => {

    const [value, setValue] = useState('')

    console.log(value)
const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(value)

}



  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
         Years of Experience   
        </FormLabel>
        <RadioGroup onChange={handleChange} aria-labelledby="job-experience-group-label" name="job-experience-group">
             <FormControlLabel control={<Radio/>} label='0-2' value="0-2"/>
             <FormControlLabel control={<Radio/>} label='3-6' value="3-6"/>
             <FormControlLabel control={<Radio/>} label='8-10' value="8-10"/>
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default RadioBtnComp
