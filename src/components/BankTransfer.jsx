import { useState } from 'react'
import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';





function BankTransfer(props){

const {closePage} = props

    return (
<>
    <Container>
        <header>
            <div>
                <p>BANK TRANSFER</p>
            </div>
            <div><button onClick={closePage}>Close <FontAwesomeIcon icon={faTimes} /></button></div>
        </header>
        <div>
            <hr style={{width: '100%'}} />
            
                <label for="ussd">Select from the option below to view details</label><br />
                <select  id="ussd">
                    <option disabled selected>Select ussd type</option>
                    <option value="0">Kingdom Care Covenant (Humanitarian Service)</option>
                    <option value="1">Shiloh Sacrifice</option>
                    <option value="2">Offering</option>
                    <option value="3">Tithe</option>
                    <option value="4">Mission Adoption Scheme</option>
                    <option value="5">The Ark Project</option>
                    <option value="6">Rural Church Building Project</option>
                </select>
            
        </div>
    </Container>
</>
    );
};


const Container = styled.div` 
    color: #666666;

    header{
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-between;
        align-items: center;

    }
    select{
            width: 500px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

    button{
        color:red;
        background: none;
        border: none;
        font-size: 19px;
        cursor: pointer;
        width:100px;
    }
`;

export default BankTransfer;