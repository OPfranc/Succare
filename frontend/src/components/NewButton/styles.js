import styled from 'styled-components'

export const Button = styled.div`

    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
    border-radius: 50%;

    color: white;

    font-size: 35px;

    font-weight: bold;

    display: flex;

    align-items: center;
    justify-content: center;
    background-color: green;

    cursor: pointer;

    z-index: 300;

    &:hover{

        background-color: blue;
    }

    &:active{
        background-color: white;

    }

`