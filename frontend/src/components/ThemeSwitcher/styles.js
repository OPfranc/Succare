import styled from 'styled-components'
import { LightBulb } from '@styled-icons/heroicons-solid'


export const Button = styled(LightBulb)`


    ${props => props.theme.title === 'dark' ? 
        `
        border-radius: 50px;
        background: linear-gradient(145deg, #141414, #111111);
        box-shadow:  4px 4px 7px #0b0b0b, -4px -4px 7px #1b1b1b;
        
        ` 
    : 
        `
        border-radius: 50px;
        background: linear-gradient(145deg, #d1d1d1, #f8f8f8);
        box-shadow:  4px 4px 7px #d8d8d8,  -4px -4px 7px #ffffff;
        
        `
    }

 
    padding: 2px;

    width: 36px;
    height: 36px;
    color: ${props => props.theme.title === 'dark' ? '#e8e8e8' : '#595965'};


    border-radius: 32px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover{
        color: ${props => props.theme.title === 'dark' ? '#F5F5DB' : '#262633'};
    }
`