import styled from 'styled-components'

export const Container = styled.div`

    width: 120px;
    height: 194px;
    display: flex;
    flex-direction: column;
    background-color: #1E1C22;
    color: #F6FBEF;
    border-radius: 8px;

    justify-items: center;

    h1{
        font-size: 15px;
        text-align: center;
        font-weight: 600;

    }
    h2{
        font-size: 11px;
        text-align: center;
        font-weight: 500;
        opacity: 75%;
    }
    p{
        font-size: 10px;
    }

    img{
        margin-top: 6px;
        align-self: center;
        height: 35px;
        width: 35px;
    }
    
`