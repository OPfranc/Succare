import React from 'react'

import { Wrapper, ButtonsContainer, Container, Button, Reject } from './styles'

export default function ConfirmBox({ switchTheme }) {

    return (
        <Wrapper>
            <Container>

                <h1>Title</h1>
                <span>aasdas
                    asdasd
                    asd
                    asda
                    sda
                </span>
                
                <ButtonsContainer>

                    <Button>aa</Button>
                    <Button className={'reject-button'}>bb</Button>
                </ButtonsContainer>
            </Container>
        </Wrapper>
    )
}