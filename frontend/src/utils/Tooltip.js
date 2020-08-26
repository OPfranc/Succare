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
        color: #ffffff;
        background: #6a70c9;
        border: 1px solid  #6a70c9;
        text-align: center;
        border-radius: 8px;
        padding: 5px 0;

        font-size: 12px;
        position: absolute;
        z-index: 10;
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
            border-color: #6a70c9 transparent transparent transparent;
        }
`