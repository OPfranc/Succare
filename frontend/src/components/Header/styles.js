import styled from 'styled-components'

export const Container = styled.div`
    
    width: 100%;
    padding: 20px 55px;
    height: 55px;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.textPrimaryBackground };
    color: ${props => props.theme.colors.text };
    justify-content: space-between;
    
    border-bottom: 1px solid grey;
`
