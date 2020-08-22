import styled from 'styled-components'

export const Wrapper = styled.div`
    
    position: absolute;
    position: -webkit-sticky;


    top: -1px;

    width: 100%;
    height: 100%;

    top: -1px;

    background-color: #0001;
    backdrop-filter: blur(3px);

    z-index: 50;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    
    position: -webkit-sticky;
    position: sticky;

    padding: 13px;

    width: 300px;
    height: 250px;

    background-color: #999;
    display: flex;

    border-radius: 8px;
    flex-direction: column;
    align-items: center;

    z-index: 60;

    h1{


    }

    span{

    }
`

export const Button = styled.div`

    position: relative;
    display: flex;


    width: 93px;
    height: 36px;
    background-color: green;

    border-radius: 8px;

    justify-content: center;
    align-items: center;
    padding: 21px;

    &:hover{
        background-color: blue
    }

    &.reject-button{

        background-color: yellow;
    }

`
export const ButtonsContainer = styled.div`
    
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    background-color: black;

    width: 100%;
    height: 30%;


    
`