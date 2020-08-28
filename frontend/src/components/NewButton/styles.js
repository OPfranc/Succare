import styled from 'styled-components'

export const Button = styled.div`

    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
    border-radius: 50%;

    color: ${props => props.theme.colors.background };

    font-size: 35px;

    font-weight: bold;

    display: flex;

    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};

    border: 1px solid ${props => props.theme.colors.background};

    transition: all .3s ease;

    cursor: pointer;

    z-index: 300;

    &:hover{

        background-color: ${props => props.theme.colors.secondary};
    }

    &:active{
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.secondary};
        border-color: ${props => props.theme.colors.secondary};

    }

`