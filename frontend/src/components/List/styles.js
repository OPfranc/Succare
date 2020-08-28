import styled from 'styled-components'


export const Container = styled.div`

    
    position: relative;
    width: 100%;
    height: calc(100vh - 55px);
    padding: 5px;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    box-sizing: border-box;
    overflow: auto;

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
  }

`