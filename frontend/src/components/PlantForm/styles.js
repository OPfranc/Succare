import styled from 'styled-components'


export const Container = styled.div`

    width: 300px;
    height: 348px;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    
    padding: 23px;


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

    p{
        margin-top: 12px;
    }

`