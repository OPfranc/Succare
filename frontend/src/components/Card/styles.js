import styled from 'styled-components'
import { Water } from '@styled-icons/entypo'
import { Water as WaterButtom } from '@styled-icons/ionicons-solid'


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
    /* background: linear-gradient(#dE685E, #EE786E); */
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
    left: 20px;

    button{

        margin-bottom: 51px;
    }

    div{
        margin-top: 19px;
    }

    span{
        margin: 15px 3px;
        font-size: 13px;
        text-shadow: 1px 2px 3px ${props => props.theme.title === 'dark' ? 'black' : 'gray'};

    }

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
    bottom: 36px;
    right: 36px;
    /* color: red; */
    width: 42px;
    height: 42px;
    position: absolute;
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
	top:-1px;
}

`

