import { useState } from 'react'
import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';





const Ussd = () => {
    return (
<>
    <Container>
        <header>
            <div>
                <p>USSD</p>
            </div>
            <div><button>Close <FontAwesomeIcon icon={faTimes} /></button></div>
        </header>
        <div>
            <hr style={{width: '100%'}} />
            
                <label for="ussd">Select from the option below to view details</label><br />
                <select  id="ussd">
                    <option disabled selected>Select ussd type</option>
                    <option value="0">Access Bank USSD</option>
                    <option value="1">CMFB USSD</option>
                    <option value="2">Ecobank USSD</option>
                    <option value="3">Etransact USSD</option>
                    <option value="4">Fidelty Bank USSD</option>
                    <option value="5">First Bank USSD</option>
                    <option value="6">GT Bank USSD</option>
                    <option value="7">Keystone Bank USSD</option>
                    <option value="8">Rebies Bank USSD</option>
                    <option value="9">Stanbic Bank USSD</option>
                    <option value="10">Sterling Bank USSD</option>
                    <option value="11">UBA USSD</option>
                    <option value="12">Unity Bank USSD</option>
                    <option value="13">Wema Bank USSD</option>
                    <option value="14">Zenith Bank USSD</option>
                </select>
            
        </div>
    </Container>
</>
    );
};


const Container = styled.div` 
    border:1px solid red;

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

export default Ussd;