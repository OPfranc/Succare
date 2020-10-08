import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: column; 
    position: relative;
    box-sizing: border-box;
    overflow: hidden;

    margin: 10px 10px;

    width: 275px;
    height: 415px;

    background-color: ${props => props.theme.colors.background};
    border-radius: 8px;


    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);

`

export const InfoContainer = styled.div`

    position: relative;
    
    width: 100%;
    
    height: 97px;

    background-color: ${props => props.theme.colors.cardBackground };
    color: ${props => props.theme.colors.textSecondary };
    transition: height 0.2s ease-out;
    overflow: hidden;
    z-index: 2;

    padding: 3px;

    ${Container}:hover & {
        height: 100%;
    }

    h1{
        font-size: 21px;
        text-align: center;
        font-weight: 600;
        margin-top: 20px;
    }
    h2{
        font-size: 16px;
        text-align: center;
        font-weight: 500;
        opacity: 65%;
        margin-top: 13px;

    }
`

export const Info = styled.div`

    margin: 19px 0;
    position: relative;
    display: flex;
    width: 100%;

    padding: 0 8px;

    &.watering{
        margin: 125px 50px;
    }

    h4{
        margin-left: 67px;
        margin-right: 10px;

    }
`
export const IconContainer = styled.div`

        width: 100%;
        padding: 5px 12px;
        font-size: 13px;
        font-weight: 500;
        display: flex;
        justify-content: space-around;
        flex-flow: row wrap;
        

        background-color: ${props => props.theme.colors.background };
        border: 1px solid ${props => props.theme.colors.textPrimaryBorder };

        border-radius: 0 8px 8px 0;
        transition: all .3s ease;

`
export const Label = styled.label`
 
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 89px;
        border-radius: 8px 0 0 8px;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        color: ${props => props.theme.colors.textPrimary };
        background-color: ${props => props.theme.colors.textPrimaryBackground };

        border: 1px solid ${props => props.theme.colors.textPrimaryBorder };
        border-right: 0;
        
        &.watering{
        
        min-width: 250px;
            
        }


`
export const Icon = styled.div`

    position: relative;
    display: flex;
    background-color: ${props => props.theme.colors.primary };
    align-items: center;
    justify-content: center;

    padding: 15px;
    height: 35px;
    width: 52px;


    border-radius: 8px;

    margin: 2px 5px;


    transition: all .3s ease;


    color: ${props => props.theme.colors.background };
    background-color: ${props => props.theme.colors.primaryStrongher };

    &:hover{
        span{
                visibility: visible;
            }
    }

`
export const WateringWarn = styled.div`

    position: absolute;
    
    bottom: 15px;
    right: 15px;
    display: flex;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: green;


    &.caution{
        background-color: yellow;
    }
    &.danger{
        background-color: red;
        animation: vibrate-1 0.3s linear infinite both;
    }
    padding: 6px;


    @keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
 

`
export const WateringWarnSpin = styled.div`

    position: relative;
    min-width: 54px;
    min-height: 54px;
    border: 2px dashed green;
    left: -40%;
    top: -40%;
    

    animation: spin 3s linear infinite alternate;

    border-radius: 50%;

    
    &.caution{
        border: 2px dashed yellow;
        animation: spin 3s linear infinite;

    }

    &.danger{
        border: 2px dashed red;
        animation: spin 3s linear infinite;
    }

    @keyframes spin { 
            100% { 
            transform: rotateZ(360deg);
            }
    }
`
export const Image = styled.img`

    align-self: center;
    position: absolute;
    top: 97px;
    height: calc(100% - 97px);
    object-fit: cover
`