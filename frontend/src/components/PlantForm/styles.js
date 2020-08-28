import styled from 'styled-components'


export const Wrapper = styled.div`

    
    
    position: absolute;

    top: 0px;

    width: 100%;
    height: 100%;
    
    z-index: 20;
    background-color: ${props => props.theme.colors.secondary }21;
    backdrop-filter: blur(3px);
`
export const Close = styled.div`

    display: flex;

    align-items: center;
    justify-content: center;
    position: absolute;

    top: 16px;
    right: 7px;

    height: 24px;
    width: 24px;

    border-radius: 8px; 


    color: ${props => props.theme.colors.cardBackground };

    border: 1px solid  ${props => props.theme.colors.background };
    
    background-color: ${props => props.theme.colors.primary };


    transition: all .1s ease;

    cursor: pointer;

    &:hover{

 background-color: ${props => props.theme.colors.secondary };

    }

    &:active{
        background-color:${props => props.theme.colors.background };
        color: ${props => props.theme.colors.secondary };
        border-color: ${props => props.theme.colors.secondary };

    }
`

export const Container = styled.div`

    width: 350px;
    height: 700px;
    background-color: ${props => props.theme.colors.cardBackground }E6;
    backdrop-filter: blur(3px);


    display: flex;
    flex-direction: column; 
    
    padding: 31px;

    box-sizing: border-box;

    position: relative;

    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);

    overflow: hidden;

    margin: 18px auto;
    border-radius: 8px;

    h2{
        text-align: center;
        font-weight: 500;
        color: ${props => props.theme.colors.textSecondary };
        font-size: 14px;
        margin-top: 23px;
        padding-top: 8px;
        padding-bottom: 4px;
        background-color: ${props => props.theme.colors.textSecondaryBackground };
        border: 1px solid ${props => props.theme.colors.textPrimaryBorder };
        border-radius: 8px 8px 0 0;
    }

`
export const TextInputContainer = styled.div`

    margin: 5px 0;
    position: relative;
    display: flex;
    width: 100%;

    span {
        min-width: 100px;
        border-radius: 8px 0 0 8px;
        white-space: nowrap;
        text-align: center;
        padding: 8px 12px;
        font-size: 14px;
        line-height: 25px;
        color: ${props => props.theme.colors.textSecondary };
        background-color: ${props => props.theme.colors.textSecondaryBackground };
        border: 1px solid ${props => props.theme.colors.textPrimaryBorder };

        transition: all .3s ease;
    }

    h4 {
        font-size: 12px;
        position: absolute;
        bottom: 101%;
        color: red;
        left: 5%;
    }

    &:focus-within {
        span {
            color: ${props => props.theme.colors.background };
            background-color: ${props => props.theme.colors.secondaryBackground };
            border-color: ${props => props.theme.colors.secondaryBorder };
        }
    }

    input{

        width: 100%;
        padding: 8px 16px;
        line-height: 25px;
        font-size: 14px;
        font-weight: 500;
        
        color: ${props => props.theme.colors.secondaryBackground };
        background-color: ${props => props.theme.colors.background };
        border: 1px solid;
        border-color: ${props => props.theme.colors.textSecondaryBorder };

        border-left: 0;

        border-radius: 0 8px 8px 0;
        transition: all .3s ease;

        &::placeholder {
            
            color: ${props => props.theme.colors.textSecondaryBorder };
        }
        &:focus {
            background-color: ${props => props.theme.colors.background };
            border-color: ${props => props.theme.colors.secondaryBorder };
            outline: none;
        }
    }
`

export const SendButton = styled.button.attrs({
    type: 'submit'
})`

    margin: 10px 0;
    padding: 8px;
    border-radius: 8px;
    width: 100%;
    height: 41px;

    background-color: ${props => props.theme.colors.primary };

    border: 1px solid ${props => props.theme.colors.cardBackground };

    color: ${props => props.theme.colors.cardBackground };

    font-size: 14px;
    font-weight: 600;
    
    cursor: pointer;

    text-transform: uppercase;
    transition: all .2s ease;
    &:hover{

        background-color: ${props => props.theme.colors.secondary };;
    }

    &:active {
        background-color: ${props => props.theme.colors.cardBackground };
        color: ${props => props.theme.colors.secondary };;
        border-color: ${props => props.theme.colors.secondary };;

	    position:relative;
	    bottom:-1px;
        outline: none;
    }
    outline: none;

`
export const WaterContainer = styled.div`

    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    padding: 12px 8px;


    margin-bottom: 5px;

    background-color: ${props => props.theme.colors.background };
    border: 1px solid ${props => props.theme.colors.textSecondaryBorder };
    border-radius: 0 0 8px 8px;
    border-top: 0;
    span{
        visibility: hidden;
    }

    cursor: pointer;

    &:hover{

        background-color: ${props => props.theme.colors.textSecondaryBackground };

        span{
            visibility: visible;
        }

    }
    &:active {
	    position:relative;
	    bottom:-1px;
    }

`
export const HiddenInput = styled.input.attrs({
    readOnly: true,
})`
    display: none;
`

export const ButtomContainer = styled.div`
    padding: 12px 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: ${props => props.theme.colors.background };
    border: 1px solid  ${props => props.theme.colors.textSecondaryBorder };
    border-radius: 0 0 8px 8px;
    border-top: 0;
`

export const Selector = styled.div`

    position: relative;
    display: flex;

    align-items: center;
    justify-content: center;

    padding: 3px;
    height: 35px;
    width: 75px;

    color: ${props => props.theme.colors.secondaryBorder}50;
    background: ${props => props.theme.colors.cardBackground };
    border: 1px solid ${props => props.theme.colors.primaryLightest };

    margin: 0px 5px;

    border-radius: 8px;

    transition: all .3s ease;

    cursor: pointer;

    &:hover{
        color:  ${props => props.theme.colors.background };
        background:  ${props => props.theme.colors.secondaryBackground };
        border-color: ${props => props.theme.colors.secondaryBorder };
        box-shadow: 0 5px 15px ${props => props.theme.colors.secondaryBorder}40;

        
        span{
                visibility: visible;
            }
    }

    &:active {
        position:relative;
        bottom:-1px;

    }

    &.selected{

        color: ${props => props.theme.colors.background };
        background: ${props => props.theme.colors.primaryStrongher };
        border-color: ${props => props.theme.colors.primary };

        &:hover{
            color: ${props => props.theme.colors.background };
            background: ${props => props.theme.colors.secondaryBackground };
            border-color: ${props => props.theme.colors.secondaryBorder };
            box-shadow: 0 5px 15px ${props => props.theme.colors.secondaryBorder }40;
        }
    }

`