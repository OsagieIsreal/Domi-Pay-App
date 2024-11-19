export const handleInputChange = (event, setState) => {
  const { name, value } = event.target
  setState((prevState) => ({
    ...prevState,
    [name]: value,
  }))
} 


 export const handleSelectOption = (event, setState) => {
   const selectedValue = event.target.value
   const selectName = event.target.name
   setState((prevState) => ({
     ...prevState,
     [selectName]: selectedValue,
   }))
 }