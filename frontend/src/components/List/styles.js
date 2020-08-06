import styled from 'styled-components'

export const Container = styled.div`

    width: 750px;
    height: 650px;
    margin: 0px 445px;
    border-radius: 8px;
    background-color: #F5F4F6;
    display: flex;
    flex-direction: row;
    box-shadow: 0 2px 1px rgba(0,0,0,0.09), 
              0 4px 2px rgba(0,0,0,0.09), 
              0 8px 4px rgba(0,0,0,0.09), 
              0 16px 8px rgba(0,0,0,0.09),
              0 32px 16px rgba(0,0,0,0.09);
    box-sizing: border-box;
    overflow: auto;
    
    border: 1px solid #ffffff;


    ul{
        
        padding-top: 5px;
    }

    li{
        color: #141216;
        border-radius: 8px;
        border: 1px solid #ffffff;
        align-items: center;
        background-color: #EBE9ED;
        margin: 3px 15px;
        padding: 2px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        strong{
        color: #141216;

        }
    }
    @media (max-width: 768px) {
        width: 450px;
  }

`