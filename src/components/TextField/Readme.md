TextField as component from MUI.

props:

- label 

- variant -  standard, filled, outlined.

- size
       - small
       - medium, large

- color - primary, secondary, success.


- required - to mention the field is to fill mandatory.

- helperText - to appear at the bottom of the field.

- type attribute - like in input type attribute.
  type = "text" , type="password"

- disabled 

- Readonly -> Inputprops={{readOnly:true}}

- Inputprops={{ startAdornment or endAdornment: (<InputAdornment position="start" >$</InputAdornment>)}}- used for adding like for Amount text field we need $ or Rs. similarly for Weight we need kgs at end - kgs .



