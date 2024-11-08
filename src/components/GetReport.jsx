import { useState } from 'react'
import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';





const GetReport = () => {
    return (
<>
    <Container>
        <header>
            <div>
                <p>GetReport</p>
            </div>
            <div><button>Close <FontAwesomeIcon icon={faTimes} /></button></div>
        </header>
        <div>
            <div>
                <p>CREDIT AND DEBIT CARDS</p>
            </div>

            <form>
            <FormGroup>
                <div>
                    <label for="expiryDate">Lastname</label>
                    <input type="text" id="LastName" placeholder="Lastname" style={{maxWidth: '221.5px'}} required/>
                </div>          
            </FormGroup>
            <FormGroup>
                <button type="submit">Give Now</button>
            </FormGroup>
        </form>    
        </div>
    </Container>
</>
    );
};


const Container = styled.div` 
    border:1px solid red;
    position: absolute;
    left:275.8em;
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

const FormGroup = styled.div`
     margin-bottom: 15px;

        label {
            display: block;
            margin-bottom: 5px;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #E53935!important;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            // box-shadow: 0 5px #0056b3;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.75, 0.12, 0, 1.14);
        }
        button:hover {
            background-color: #218838;
            transform: translateY(-2px);
        }
        button:active { 
            box-shadow: inset 0px 0px 5px 2px #4f1413;
        }

`

export default GetReport;