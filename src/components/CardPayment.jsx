import styled from 'styled-components'
import Box, { Input, Label, TextArea, Select } from './custom/Box'
import Button from './custom/Button'
import {  useState } from 'react'
// import axios from 'axios'
import { handleInputChange, handleSelectOption } from '../utils/formHelpers'


const CardPayment = () => {
  const [state, setState] = useState({
    bank: '',
    currency: '',
    amount: 0,
    offeringType: '',
    offeringName: '',
    offeringDescription: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const submitHandler = (event) => {
    event.preventDefault()

  }

//   useEffect(() => {
//     axios.post('http://localhost:3000/api/v1/offering', state).then((response) => {
//       console.log(
//         '🚀 ~ file: CardPayment.jsx:36 ~ useEffect ~ response:',
//         response
//       )
//     }).catch((error) => {
//       console.log(
//         '🚀 ~ file: CardPayment.jsx:36 ~ useEffect ~ error:',
//         error
//       )
//     })
// }, [])



  const onInputChange = (event) => handleInputChange(event, setState)

 

  return (
    <>
      <PaymentContainer>
        <h2>Card Payment</h2>
        <form action='' onSubmit={submitHandler}>
          <FormGroup>
            <Label htmlFor='bank'>Bank</Label>
            <Select
              id='bank'
              autoFocus
              name='bank'
              required
              value={state.bank}
              onChange={(event) => handleSelectOption(event, setState)}
            >
              <option value='bank1' disabled defaultValue={state.bank}>
                Select Bank
              </option>
              <option value='bank2'>First Bank</option>
              <option value='bank3'>Access Bank</option>
              <option value='bank4'>Wema Bank</option>
              <option value='bank5'>Eco Bank</option>
              <option value='bank6'>Polaris Bank</option>
              <option value='bank7'>others</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Box display='flex' gap='15px'>
              <Box>
                <Label htmlFor='currency'>Currency</Label>
                <Select
                  id='currency'
                  style={{ maxWidth: '100px' }}
                  required
                  name='currency'
                  onChange={onInputChange}
                >
                  <option value='currency' defaultValue={state.currency} disabled>
                    Currency
                  </option>
                  <option value='Naira'>Nigerian Naira</option>
                  <option value='Dollar'>United States Dollar</option>
                </Select>
              </Box>
              <Box>
                <Label htmlFor='amount'>Amount</Label>
                <Input
                  type='number'
                  id='amount'
                  name='amount'
                  placeholder='Enter amount'
                  required
                  width='6.5rem'
                  value={state.amount}
                  onChange={onInputChange}
                />
              </Box>
            </Box>
          </FormGroup>

          <FormGroup>
            <Label htmlFor='offeringType'>Select Offering Type</Label>
            <Select
              id='offeringType'
              required
              name='offeringType'
              onChange={(event) => handleSelectOption(event, setState)}
            >
              <option value='bank1' disabled defaultValue={state.offeringType}>
                Offering Type
              </option>
              <option value='offering1'>General Offering</option>
              <option value='offering2'>Tithe</option>
              <option value='offering3'>Thanksgiving Offering</option>
              <option value='offering4'>Shiloh Sacrifice</option>
              <option value='offering5'>Mission Adoption Scheme</option>
              <option value='offering6'>Prophet Offering</option>
              <option value='offering7'>The Ark Project</option>
              <option value='offering8'>Rural Church Building</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Box display='flex' gap='15px'>
              <Box>
                <Label htmlFor='cardNumber'>Firstname</Label>
                <Input
                  type='text'
                  name='firstName'
                  id='FirstName'
                  placeholder='Firstname'
                  max-width='221.5px'
                  required
                  value={state.firstName}
                  onChange={onInputChange}
                />
              </Box>

              <Box>
                <Label htmlFor='expiryDate'>Lastname</Label>
                <Input
                  type='text'
                  name='lastName'
                  id='LastName'
                  placeholder='Lastname'
                  max-width='221.5px'
                  required
                  value={state.lastName}
                  onChange={onInputChange}
                />
              </Box>
            </Box>
          </FormGroup>

          <FormGroup>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div>
                <Label htmlFor='cvv'>Email</Label>
                <Input
                  type='email'
                  id='Email'
                  placeholder='Enter Email'
                  max-width='221.5px'
                  name='email'
                  required
                  value={state.email}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <Label htmlFor='cvv'>Phone</Label>
                <Input
                  type='tel'
                  id='Phone'
                  name='phone'
                  placeholder='Phone Number'
                  max-width='221.5px'
                  required
                  value={state.phone}
                  onChange={onInputChange}
                />
              </div>
            </div>
          </FormGroup>

          <FormGroup>
            <Label htmlFor='cvv'>Comment</Label>
            <TextArea
              id='Comment'
              placeholder='Comment'
              required
              name='comment'
              value={state.comment}
              onChange={onInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Button type='submit'>Give Now</Button>
          </FormGroup>
        </form>
      </PaymentContainer>
    </>
  )
}

const PaymentContainer = styled.div`
  width: inherit;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #666666;
  box-sizing: border-box;
  padding: 2rem;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`
const FormGroup = styled(Box)`
  margin-bottom: 1.5rem;
`

export default CardPayment
