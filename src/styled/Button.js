import styled from "styled-components"


export const Button = styled.button `
background-color:black;
color:white;
display:flex;
padding:12px 18px;
min-width: 220px;
font-size: 16px;
justify-content: center;
border-radius:5px;
border:none;
transition: 0.3s background ease-in;

    &:hover{
        background-color: white;
        border:1px solid black;
        color:black;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button) `
    background-color: white;
    border: 1px solid black;
    color:black;
    &:hover{
        background-color: black;
        border:1px solid transparent;
        color:white;
        transition: 0.3s background ease-in;
    }
`;