import { useState } from 'react'
import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';





const Support = (props) => {
    const {closePage} = props

    return (
<>
        <Container>
        <header>
            <div>
                <p>Support</p>
            </div>
            <div><button onClick={closePage} style={{color:'red', background: 'none', border: 'none', fontSize: '19px', cursor: 'pointer', width:'100px'}} >Close <FontAwesomeIcon icon={faTimes} /></button></div>
        </header>
        <div>
            <hr style={{width: '100%'}} />
            
                <p>
                    New support issue, please click on the New Ticket, <br />
                    and if you have submitted a ticket earlier, 
                    check your email for ticket ID to load ticket.
                </p>
            <ButtonContainer>
                <RedButton>New Ticket</RedButton>
                <WhiteButton>Load Ticket</WhiteButton>
            </ButtonContainer>
            
        </div>
    </Container>
</>
    );
};


const Container = styled.div` 
    color: #666666;
    width:30em;

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
`;


const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const RedButton = styled.button`
    background-color: red;
    color: white;
    float: left;
    width: calc(100% - 20px);
    padding: 7px 10px;
    text-align: center;
    font-size: 100%;
    font-weight: bold;
    border-radius: 6px;
    text-transform: uppercase;
    border: 1px solid #cc0000;
    cursor:pointer;
`;

const WhiteButton = styled.button`
    background-color: white;
    color: #cc0000;
    float: left;
    width: calc(100% - 20px);
    padding: 7px 10px;
    text-align: center;
    font-size: 100%;
    font-weight: bold;
    border-radius: 6px;
    text-transform: uppercase;
    border: 1px solid #cc0000;
    cursor:pointer;
`;



export default Support;

