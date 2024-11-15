import { useState } from 'react'
import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';


const TextToGive = (props) => {
    const {closePage} = props

    return (
<>
    <Container>
        <header>
            <div>
                <p>TextToGive</p>
            </div>
            <div><button  onClick={closePage}>Close <FontAwesomeIcon icon={faTimes} /></button></div>
        </header>
        <div>
            <hr style={{width: '100%'}} />
            
                <p> 
                    <span>International giving with a Visa, Mastercard, Discover or Amex card can give in USD, GBP, EUR, CAD, etc 
                    via Text-To-Give, Mobile App and Online Giving</span>

                    <span>To give, Text Give to <b style={{color: 'red'}}> +1202-840-8100</b> and follow the instructions.</span>  <button><FontAwesomeIcon icon={faCopy} />COPY NUMBER</button>

                    <span><i style={{color: 'red'}}>The Give keyword is not case sensitive. The Text-To-Give number is reachable anywhere in the world..</i></span>
                </p>
            
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

    p button{
        color:white;
        background-color: #900;
        font-size: 19px;
        padding: 3px 4px;
        border-radius:20px;
        font-size:10px;
    }

    p{
        width:500px
    }

    span{
        display:block;
    }
`;

export default TextToGive;