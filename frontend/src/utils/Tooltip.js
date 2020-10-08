import React from 'react'
import styled from 'styled-components'


export default function Tooltip({ children }){

    return (
        <Text>
            {children}
        </Text>
    )
}


const Text = styled.span`
        visibility: hidden;
        color:${props => props.theme.colors.background };
        background: ${props => props.theme.colors.secondaryBorder };
        border: 1px solid  ${props => props.theme.colors.secondaryBorder };
        text-align: center;
        border-radius: 8px;
        padding: 5px 0;

        font-size: 12px;
        position: absolute;
        z-index: 90;
        bottom: 120%;
        left: 50%;
        margin-left: -60px;


        width: 120px;
        
        &::after {
            content: " ";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: ${props => props.theme.colors.secondaryBorder } transparent transparent transparent;
        }
`