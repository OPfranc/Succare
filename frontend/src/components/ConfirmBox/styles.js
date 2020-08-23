import styled from 'styled-components'

export const Wrapper = styled.div`
    
    position: absolute;
    position: -webkit-sticky;


    top: -1px;

    width: 100%;
    height: 100vh;

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

    padding-top: 13px;

    width: 300px;
    height: 150px;

    background-color: #eef4ff;
    border: 1px solid #cdd9ed;

    display: flex;

    border-radius: 8px;

    flex-direction: column;
    align-items: center;

    z-index: 60;

    h1{
        padding-top: 10px;

        color: #b2c2df;

    }

    span{
        color: #a4a6c7;
        background-color: #ffffff;
        border: 1px solid #cdd9ed;
        border-left: 0;
        border-bottom: 0;
        border-right: 0;
        width: calc(100% - 1px);
        height:  calc(100% - 1px);;

        border-radius: 0 0 8px 8px;

        padding: 8px;

    }
`

export const Button = styled.div`

    position: relative;
    display: flex;
    cursor: pointer;

    width: 93px;
    height: 36px;

        color: #ffffff;
        background: #8acdda;
        border-color: #59b8cb;

    border-radius: 8px;

    justify-content: center;
    align-items: center;
    padding: 21px;

    &:hover{
        color: #ffffff;
            background: #a4a6c7;
            border-color: #6a70c9;
            box-shadow: 0 5px 15px #6a70c940;
    }

    &.reject-button{

        color: #b2c2df50;
        background: #eef4ff;
        border: 1px solid #cdd9ed;

        &:hover{
            color: #ffffff;
            background: #a4a6c7;
            border-color: #6a70c9;
            box-shadow: 0 5px 15px #6a70c940;
        }
    }

    &:active{
        position:relative;
	    bottom:-1px;
    }

`
export const ButtonsContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 12px 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #cee2eb;
    border-radius: 0 0 8px 8px;

`