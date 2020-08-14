import styled from 'styled-components'

export const Container = styled.div`

    width: 300px;
    height: 348px;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    
    align-content: center;


    background: linear-gradient(#fff, #f8f8f8);
    box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    margin: 1.5rem;
    

    border: 2px solid green;

`

export const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 70px;
    /* background: linear-gradient(#dE685E, #EE786E); */
    background-color: ${props => props.theme.colors.primary};
    transition: height 0.2s ease-out;
    overflow: hidden;
    z-index: 2;

    background-image:
        linear-gradient(0deg, var(--clr-border), var(--clr-border) 25%, transparent 25%, transparent 75%, var(--clr-border) 75%), // left
        linear-gradient(90deg, var(--clr-border), var(--clr-border) 25%, transparent 25%, transparent 75%, var(--clr-border) 75%), // top
        linear-gradient(180deg, var(--clr-border), var(--clr-border) 25%, transparent 25%, transparent 75%, var(--clr-border) 75%), // right
        linear-gradient(270deg, var(--clr-border), var(--clr-border) 25%, transparent 25%, transparent 75%, var(--clr-border) 75%) // bottom
    ;

    ${Container}:hover & {
        height: 100%;
        border-radius: 0 5px 5px 0;
    }




`
export const CardHeader = styled.div`

padding: 9px;
    h1{
        font-size: 19px;
        text-align: center;
        font-weight: 600;
        margin: 6px;
    }
    h2{
        font-size: 14px;
        text-align: center;
        font-weight: 500;
        opacity: 75%;

    }


`
export const HiddenInfo = styled.div`
    width: 300px;
    position: absolute;
    left: 50px;
    height: 100%;


    span{

        font-size: 13px;
        border: inline;
    }


`
export const Description = styled.div`
    position: absolute;
    top: 65px;

    p{
        overflow: initial;
    }
    span{
        position: absolute;
        top: calc(calc(348px - 70px) - 20px);
        left: 150px;
        color: white;

    }

    img{
        opacity: 70%;
    }
`


