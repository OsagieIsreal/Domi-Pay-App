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
                <option disabled selected>Currency</option>
                <option>Nigerian Naira</option>
                <option>United States Dollar</option>
                </Select>
            </Box>
            <Box>
                <Label for="amount">Amount</Label>
                <Input type="number" id="amount" placeholder="Enter amount" required width='6.5rem' width="20rem" />
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
            <Box display='flex' gap="15px">
             <Box>
                <Label for="cardNumber">Firstname</Label>
                <Input type="text" id="FirstName" placeholder="Firstname" max-width= '221.5px' required/>
            </Box>

            <Box>
                <Label for="expiryDate">Lastname</Label>
                <Input type="text" id="LastName" placeholder="Lastname" max-width= '221.5px' required/>
            </Box> 
            </Box>               
            </FormGroup>
            
            <FormGroup>
            <div style={{display: 'flex', gap: '15px'}}>
                <div>
                <Label for="cvv">Email</Label>
                <Input type="Email" id="Email" placeholder="Enter Email" max-width= '221.5px' required/>
              
            </div>
            <div>
                <Label for="cvv">Phone</Label>
                <Input type="tel" id="Phone" placeholder="Phone Number" max-width= '221.5px' required/>
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
     width: inherit;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
         color: #666666;
         box-sizing: border-box;
         padding:2rem;

      h2 {
         text-align: center;
         margin-bottom: 2rem;
        }

       
`;

const FormGroup = styled(Box)`
 margin-bottom: 1.5rem

      
`;


export default CardPayment



