import { useState } from 'react'
import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import  {Input} from './custom/Box'





const GetReport = (props) => {
    const {closePage} = props

    return (
<>
    <Container>
        <header>
            <div>
                <p>GetReport</p>
            </div>
            <div><button onClick={closePage}>Close <FontAwesomeIcon icon={faTimes} /></button></div>
        </header>
        <div>
            <div>
                <p>Please provide the email used on the platform and the requested report will be sent to thesame address</p>
            </div>

            <form>
            <FormGroup>
                <div>
                    <label for="email">Email</label>
                    <ReportInput type="email" id="email" placeholder="email"required/>
                </div>          
            </FormGroup>
            <FormGroup>
                <div>
                    <label for="startDate">Start Date</label>
                    <ReportInput type="text" id="StartDate" placeholder="StartDate" required/>
                </div>          
            </FormGroup>
            <FormGroup>
                <div>
                    <label for="endDate">End Date</label>
                    <ReportInput type="text" id="EndDate" placeholder="EndDate" required/>
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
            width: 90%;
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
const ReportInput = styled(Input)`
    width: 90%;
`

export default GetReport;