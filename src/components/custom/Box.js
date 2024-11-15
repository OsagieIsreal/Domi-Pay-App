import styled from 'styled-components';

const Box = styled.div`
   font-size:  ${props => props.fontSize  || "1rem"};
    width: ${props => props.width || ""};
    height: ${props => props.height || ''};
    max-width: ${props=> props.maxw || ""};
    color: ${props => props.color  || "#000"};
    padding: ${props => props.padding  || ""};
    border:  ${props => props.border  || ""};
    display:  ${props => props.display  || ""};
    justify-content:  ${props => props.justifyContent  || ""};
    gap:  ${props => props.gap  || ""};
    flex-wrap:  ${props => props.wrap  || ""};
    align-items:  ${props => props.alignItems  || ""};
    align-content:  ${props => props.alignContent  || ""};
    position: ${props => props.position || ""};
    left:  ${props => props.left || ""};
    right:  ${props => props.right  || ""};
    margin: ${props => props.margin  || ""};
    margin-bottom: ${props => props.marginBottom  || "  "}  `
  

export const Input = styled.input`
    font-size:  ${props => props.fontSize  || ""};
    color: ${props => props.color  || ""};
    border:  ${props => props.border  || "1px solid #ccc"};
    border-radius: ${props => props.borderRadius || "5px"};
    width: ${props => props.width || "" };
    height: ${props => props.height || ""};
    max-width: ${props=> props.maxw || ""};
    padding: ${props => props.padding  || "10px"};
    transition: ${props => props.transition || "all 0.3s ease"};

    &:focus {
        border-color: #C00;
        box-shadow: 0 0 5px rgba(204, 0, 0, 0.5);
        outline: none;
    }


`

      export const  Label  = styled.label`
            display: block;
            margin-bottom: 5px;
        
        `
    
     export const TextArea = styled.textarea`
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        
        `
       export const  Select = styled.select`
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;

         &:focus {
        border-color: #C00;
        box-shadow: 0 0 5px rgba(204, 0, 0, 0.5);
        outline: none;
    }
        
`
export default Box
// export default {Input,  FormGroup}





