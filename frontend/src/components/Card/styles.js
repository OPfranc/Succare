import styled from 'styled-components'

export const Container = styled.div`

    width: 300px;
    height: 348px;
    
    display: flex;
    flex-direction: column;
    margin: 9px 9px;

    background-color: #1E1C22;
    color: #F6FBEF;
    border-radius: 8px;

    justify-items: center;
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
    p{
        display: inline-block;
        font-size: 13px;
        border: inline;
    }   
    strong{
        font-size: 15px;
        display: inline-block;
        background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    }

    img{
        margin-top: 6px;
        align-self: center;
        height: 123px;
        width: 123px;
        margin: 13px;
    }
    div{
        display: flex;
        flex-direction: row;
    }
    
`