import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    body{

        background-color: ${props => props.theme.colors.background };
    }

`