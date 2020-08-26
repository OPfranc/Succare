import styled from 'styled-components'
import { Water } from '@styled-icons/entypo'
import { Water as WaterButtom } from '@styled-icons/ionicons-solid'

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

export const InfoContainer = styled.div`

    margin: 10px 0;
    position: relative;
    display: flex;
    width: 100%;

    align-content: center;


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
    div{
        display: flex;
        flex-direction: row;
        position: relative;
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

        align-content: center;

    }
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
export const Container = styled.div`

    width: 285px;
    height: 348px;
    background-color: #fff;

    display: flex;
    
    align-content: center;


    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);

    overflow: hidden;
    position: relative;

    margin: 18px 0px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.primary};

`

export const Info = styled.div`

    position: absolute;
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    transition: height 0.2s ease-out;
    overflow: hidden;
    z-index: 2;


    ${Container}:hover & {
        height: 100%;
    }
`
export const CardHeader = styled.div`

padding: 9px;
    h1{
        font-size: 19px;
        text-align: center;
        font-weight: 600;
        margin: 6px;
        text-shadow: 2px 1px 3px ${props => props.theme.title === 'dark' ? 'black' : 'gray'};
    }
    h2{

        font-size: 14px;
        text-align: center;
        font-weight: 500;
        opacity: 75%;
        margin-bottom: 24px;
        text-shadow: 1px 2px 3px ${props => props.theme.title === 'dark' ? 'black' : 'gray'};

    }


`
export const HiddenInfo = styled.div`

    width: 300px;
    position: absolute;

    button{

        margin-bottom: 51px;
    }

    /* div{
        display: flex;
        flex-direction: row;
        margin-top: 19px;
    } */

    /* span{
        margin: 15px 3px;
        font-size: 13px;
        text-shadow: 1px 2px 3px ${props => props.theme.title === 'dark' ? 'black' : 'gray'};

    } */

    strong{
        font-size: 17px;
        text-shadow: 2px 1px 3px ${props => props.theme.title === 'dark' ? 'black' : 'gray'};
    }

    p{
        ${props => props.theme.colors.text};
        font-weight: 600;
        font-size: 13px;
        margin: 15px 60px;
    }


`
export const Description = styled.div`
    position: absolute;
    width: 300px;

    top: 65px;

    span{
        font-size: 14px;
        overflow: auto;
        position: absolute;
        top: calc(calc(348px - 70px) - 20px);
        left: 85px;
        color: white;
        text-shadow: 2px 2px 2px black;
    }

    img{
                
    }

`

export const Watering = styled(Water)`

    position: absolute;
    bottom: 36px;
    right: 36px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #fff2;
    padding: 6px;

`


export const Buttom = styled(WaterButtom)`
    /* color: red; */
    margin: 0 200px;
    justify-self: end;
    align-self: flex-end;
    width: 42px;
    height: 42px;
    border-radius: 50px;
    background: linear-gradient(145deg, #d1d1d1, #f8f8f8);
    box-shadow:  4px 4px 7px #d8d8d810,  -4px -4px 7px #ffffff10;
    padding: 6px;
    color: ${props => props.theme.colors.buttom};

    &:hover{
        background: ${props => props.theme.colors.secondary};
        background: linear-gradient(145deg, #d1d1d1, #f8f8f810);
        border: 1px solid ${props => props.theme.colors.secondary};

    }

    &:active {
	position:relative;
	bottom:1px;
}

`
