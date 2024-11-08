 import styled from 'styled-components';
  const Button = styled.button`
            width: 100%;
            padding: 10px;
            background-color: #E53935;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            // box-shadow: 0 5px #0056b3;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.75, 0.12, 0, 1.14);
        
        &:hover {
            background-color: #218838;
            transform: translateY(-2px);
        }
        &:active { 
            box-shadow: inset 0px 0px 20px 2px #4f1413;
        }

        `

          export default Button