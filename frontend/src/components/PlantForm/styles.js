import styled from 'styled-components'


export const Wrapper = styled.div`
    
    position: absolute;

    top: 0px;

    width: 100%;
    height: 100%;
    
    z-index: 20;

`

export const Container = styled.div`

    width: 350px;
    height: 700px;
    background-color: #f7fcfc;

    display: flex;
    flex-direction: column; 
    
    padding: 31px;

    box-sizing: border-box;


    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);

    overflow: hidden;
    position: relative;

    margin: 18px auto;
    border-radius: 8px;
    /* background-color: ${props => props.theme.colors.primary}; */

    h2{
        text-align: center;
        font-weight: 500;
        color: #b2c2df;
        font-size: 14px;
        margin-top: 28px;
        padding-top: 8px;
        padding-bottom: 4px;
        background-color: #eef4ff;
        border: 1px solid #cdd9ed;
        border-radius: 8px 8px 0 0;
    }
`
export const TextInputContainer = styled.div`

    margin: 10px 0;
    position: relative;
    display: flex;
    width: 100%;

    span {
        min-width: 100px;
        border-radius: 8px 0 0 8px;
        white-space: nowrap;
        text-align: center;
        padding: 8px 12px;
        font-size: 14px;
        line-height: 25px;
        color: #b2c2df;
        background-color: #eef4ff;
        border: 1px solid #cdd9ed;

        transition: all .3s ease;
    }

    h4 {
        font-size: 12px;
        position: absolute;
        bottom: 101%;
        color: red;
        left: 5%;
    }

    &:focus-within {
        span {
            color: #ffffff;
            background-color: #a4a6c7;
            border-color: #6a70c9;
        }
    }

    input{

        width: 100%;
        padding: 8px 16px;
        line-height: 25px;
        font-size: 14px;
        font-weight: 500;
        
        color: #a4a6c7;
        background-color: #ffffff;
        border: 1px solid #cee2eb;
        border-left: 0;

        border-radius: 0 8px 8px 0;
        transition: all .3s ease;

        &::placeholder {
            
            color: #cce0e3;
        }
        &:focus {
            background-color: #ffffff;
            border-color: #6a70c9;
            outline: none;
        }
    }
`

export const SendButton = styled.button.attrs({
    type: 'submit'
})`

    margin: 10px 0;
    padding: 8px;
    border-radius: 8px;
    width: 100%;
    height: 41px;

    background-color: #ffffff;
    border: 1px solid #a4a6c7;
    color: #6a70c9;

    font-size: 14px;
    font-weight: 600;
    
    cursor: pointer;

    text-transform: uppercase;
    transition: all .3s ease;
    &:hover{
            color: #ffffff;
            background: #a4a6c7;
            border-color: #6a70c9;
    }

    &:active {
	    position:relative;
	    bottom:-1px;
        outline: none;
    }

`
export const WaterContainer = styled.div`

    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    padding: 12px 8px;


    margin-bottom: 5px;

    background-color: #ffffff;
    border: 1px solid #cee2eb;
    border-radius: 0 0 8px 8px;
    border-top: 0;
    span{
        visibility: hidden;
    }

    cursor: pointer;

    &:hover{

        background-color: #eef4ff;

        span{
            visibility: visible;
        }

    }
    &:active {
	    position:relative;
	    bottom:-1px;
    }

`
export const HiddenInput = styled.input.attrs({
    readOnly: true,
})`
    display: none;
`

export const ButtomContainer = styled.div`
    padding: 12px 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #ffffff;
    border: 1px solid #cee2eb;
    border-radius: 0 0 8px 8px;
    border-top: 0;
`

export const Selector = styled.div`

    position: relative;
    display: flex;

    align-items: center;
    justify-content: center;

    padding: 3px;
    height: 35px;
    width: 75px;

    color: #b2c2df50;
    background: #eef4ff;
    border: 1px solid #cdd9ed;

    margin: 0px 5px;

    border-radius: 8px;

    transition: all .3s ease;

    cursor: pointer;

    &:hover{
        color: #ffffff;
        background: #a4a6c7;
        border-color: #6a70c9;
        box-shadow: 0 5px 15px #6a70c940;

        
        span{
                visibility: visible;
            }
    }

    &:active {
        position:relative;
        bottom:-1px;

    }

    &.selected{

        color: #ffffff;
        background: #8acdda;
        border-color: #59b8cb;

        &:hover{
            color: #ffffff;
            background: #a4a6c7;
            border-color: #6a70c9;
            box-shadow: 0 5px 15px #6a70c940;
        }
    }

`
export const Tooltip = styled.span`
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

export const ConfirmBox = styled.div`

    position: absolute;
    /* left: 50%;
    top: 50%; */
    /* height: 120px;
    width: 200px; */
    z-index: 40;

    height: 100%;
    width: 100%;

    /* margin-left: -100px;
    margin-top: -60px; */

    border-radius: 8px;

    justify-self: center;

    background-color: #00000040;

    &::before{
        z-index: 55;
        content: ' ';
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #00000040;
        backdrop-filter: blur(2px);
        top: 0%;
    }

`
