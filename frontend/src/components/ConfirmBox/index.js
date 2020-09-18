import React from 'react'

import { Wrapper, ButtonsContainer, Container, Button } from './styles'

export default function ConfirmBox({ title, sendConfirmation, showConfirmBox }) {

    return (
        <Wrapper onClick={() => showConfirmBox(false)}>
            <Container>

                <h1>{title}</h1>

                <ButtonsContainer>

                    <Button onClick={() => sendConfirmation()}>OK</Button>
                    <Button onClick={() => showConfirmBox(false)} className={'reject-button'}>CANCEL</Button>
                </ButtonsContainer>
            </Container>
        </Wrapper>
    )
}