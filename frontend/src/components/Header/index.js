import React from 'react'

import { Container } from './styles'
import ThemeSwitcher from '../ThemeSwitcher'

export default function Header({ switchTheme }) {

    return (
        <>
            <Container>


                <ThemeSwitcher switchTheme={switchTheme}/>

                <h1>🍁</h1>

            </Container>
        </>
    )
}