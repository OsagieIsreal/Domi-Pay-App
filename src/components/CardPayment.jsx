import { useState } from 'react'
import styled from 'styled-components';
import Box, {Input, Label, TextArea, Select} from './custom/Box'
import Button from './custom/Button'


const CardPayment = () => {
    return (
    <>
    <PaymentContainer>
        <h2>Card Payment</h2>
        <form>
            <FormGroup>
                <Label for="bank">Bank</Label>
                <Select id="bank" autoFocus required>
                    <option value="bank1" disabled selected>Select Bank</option>
                    <option value="bank2">First Bank</option>
                    <option value="bank3">Access Bank</option>
                    <option value="bank3">Wema Bank</option>
                    <option value="bank3">Eco Bank</option>
                    <option value="bank3">Polaris Bank</option>
                    <option value="bank3">others</option>
                </Select>
            </FormGroup>

            <FormGroup>
            <Box display='flex' gap='15px'>
                <Box>
                <Label htmlFor="currency">Currency</Label>
                <Select id="currency" style={{maxWidth: '100px'}} required>
                <option>Currency</option>
                </Select>
            </Box>
            <Box>
                <Label for="amount">Amount</Label>
                <Input type="number" id="amount" placeholder="Enter amount" required width='36.5rem' />
            </Box> 
            </Box>               
            </FormGroup>

            
            <FormGroup>
                <Label for="offeringType">Offering Type</Label>
                <Select id="offeringType" required>
                    <option value="bank1" disabled selected>Offering Type</option>
                    <option value="bank2">General Offering</option>
                    <option value="bank3">Tithe</option>
                    <option value="bank3">Thanksgiving Offering</option>
                    <option value="bank3">Shiloh Sacrifice</option>
                    <option value="bank3">Mission Adoption Scheme</option>
                    <option value="bank3">Prophet Offering</option>
                    <option value="bank3">The Ark Project</option>
                    <option value="bank3">Rural Church Building</option>
                </Select>
            </FormGroup>

            <FormGroup>
            <Box display='flex' width='100%' >
             <Box border='1px solid red' width='47%' >
                <Label for="cardNumber">Firstname</Label>
                <Input type="text" id="FirstName" placeholder="Firstname" width='90%' required/>
            </Box>

            <Box  border='1px solid green'  width='47%'>
                <Label for="expiryDate">Lastname</Label>
                <Input type="text" id="LastName" placeholder="Lastname"   width='50%' required/>
            </Box> 
            </Box>               
            </FormGroup>
            
            <FormGroup>
            <div style={{display: 'flex', gap: '15px'}}>
                <div>
                <Label for="cvv">Email</Label>
                <Input type="Email" id="Email" placeholder="Enter Email" style={{maxWidth: '221.5px'}} required/>
              
            </div>
            <div>
                <Label for="cvv">Phone</Label>
                <input type="tel" id="Phone" placeholder="Phone Number" style={{maxWidth: '221.5px'}} required/>
            </div> 
            </div>               
            </FormGroup>

            <FormGroup>
                <Label for="cvv">Comment</Label>
                <TextArea id="Comment" placeholder="Comment" required/>
            </FormGroup>

            <FormGroup>
                <Button type="submit">Give Now</Button>
            </FormGroup>
        </form>
    </PaymentContainer>
    </>
    );
};

const PaymentContainer = styled.div` 
     width: 100%;
     padding: 2rem;
     border: 2px solid green;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
         color: #666666;

      h2 {
         text-align: center;
         margin-bottom: 2rem;
        }

       
`;

const FormGroup = styled(Box)`
 margin-bottom: 1.5rem

      
`;

export default CardPayment



