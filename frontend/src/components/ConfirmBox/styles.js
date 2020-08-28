import styled from 'styled-components'

export const Wrapper = styled.div`
    
    position: absolute;
    position: -webkit-sticky;


    top: -1px;

    width: 100%;
    height: 100vh;

    top: -1px;

    background-color: ${props => props.theme.colors.secondary }10;
    backdrop-filter: blur(3px);

    z-index: 50;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    
    position: -webkit-sticky;
    position: sticky;

    padding-top: 13px;

    width: 300px;
    height: 150px;

    background-color: ${props => props.theme.colors.cardBackground };
    border: 1px solid ${props => props.theme.colors.primaryLightest };

    display: flex;

    border-radius: 8px;

    flex-direction: column;
    align-items: center;

    z-index: 60;

    h1{
        color: ${props => props.theme.colors.textSecondary };

    }

    span{
        color: ${props => props.theme.colors.secondaryBackground };
        background-color: ${props => props.theme.colors.background };
        border: 1px solid ${props => props.theme.colors.primaryLightest };
        border-left: 0;
        border-bottom: 0;
        border-right: 0;
        width: calc(100% - 1px);
        height:  calc(100% - 1px);;

        border-radius: 0 0 8px 8px;

        padding: 8px;

    }
`

export const Button = styled.div`

    position: relative;
    display: flex;
    cursor: pointer;

    width: 93px;
    height: 36px;

        color: ${props => props.theme.colors.background };
        background: ${props => props.theme.colors.primaryStrongher };
        border-color: ${props => props.theme.colors.primary};

    border-radius: 8px;

    justify-content: center;
    align-items: center;
    padding: 21px;

    &:hover{
        color: ${props => props.theme.colors.background };
            background: ${props => props.theme.colors.secondaryBackground };
            border-color: ${props => props.theme.colors.secondaryBorder };
            box-shadow: 0 5px 15px ${props => props.theme.colors.secondaryBorder }40;
    }

    &.reject-button{

        color: ${props => props.theme.colors.textSecondary }50;
        background: ${props => props.theme.colors.cardBackground };
        border: 1px solid ${props => props.theme.colors.primaryLightest };

        &:hover{
            color: ${props => props.theme.colors.secondaryBackground };
            background: ${props => props.theme.colors.background };
            border-color: ${props => props.theme.colors.secondaryBorder };
            box-shadow: 0 5px 15px ${props => props.theme.colors.secondaryBorder}40;
        }
    }

    &:active{
        position:relative;
	    bottom:-1px;
    }

`
export const ButtonsContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 12px 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.colors.background };
    border: 1px solid ${props => props.theme.colors.textSecondaryBorder };
    border-radius: 0 0 8px 8px;

`