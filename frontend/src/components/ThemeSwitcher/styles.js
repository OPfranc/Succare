import styled from 'styled-components'
import { LightBulb } from '@styled-icons/heroicons-solid'


export const Button = styled(LightBulb)`


    background-color: ${props => props.theme.colors.primaryStrongher };

 
    padding: 2px;

    width: 36px;
    height: 36px;

    color: ${props => props.theme.title === 'dark' ? '#e8e8e8' : '#595965'};
    border: 1px solid ${props => props.theme.colors.background };


    border-radius: 32px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover{
        color: ${props => props.theme.title === 'dark' ? '#F5F5DB' : '#262633'};
    }
`