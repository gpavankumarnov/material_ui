Dropdown - Select component.


There are 2 approaches to build the dropdown.
1. TextField component
2. Select component.

Single select from Dropdown.

1. TextField using

We have to give props as - Select(keyword) to Textfield & other props as below:
Props:
select, label, value(state value) onchange func(linking to state).

Ui looks like this.
Width - depends on initial value.
2fixes: use fullwidth props to textfield.
![alt text](image.png)


Multiple select from Dropdown.

we have to use SelectProps prop & change the state to handle multiple values - SelectProps

SelectProps={{multiple:true}} 
  (same as how we used InputProps for textfield.)


  other props for style:
  size, color, helperText, error


  Fetching list of dropdown options from an api.

  