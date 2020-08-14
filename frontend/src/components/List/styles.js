import styled from 'styled-components'


export const Container = styled.div`

    width: 100%;
    height: 650px;
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
        width: 450px;
  }

`
// export const Card = styled.div`

//     width: 120px;
//     height: 194px;
//     display: flex;
//     flex-direction: column;
//     background-color: #1E1C22;
//     color: #F6FBEF;
//     border-radius: 8px;

//     justify-items: center;

//     h1{
//         font-size: 15px;
//         text-align: center;
//         font-weight: 600;

//     }
//     h2{
//         font-size: 11px;
//         text-align: center;
//         font-weight: 500;
//         opacity: 75%;
//     }
//     p{
//         font-size: 10px;
//     }

//     img{
//         margin-top: 6px;
//         align-self: center;
//         height: 35px;
//         width: 35px;
//     }
    
// `