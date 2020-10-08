import React from 'react'
// import { useStateValue } from '../../utils/StateProvider'

import { Container } from './styles'
import ThemeSwitcher from '../ThemeSwitcher'
import Login from '../Login'



export default function Header({ switchTheme }) {

    return (
        <>
            <Container>
                
                {/* <img src={user?.photoURL}></img> */}
                <ThemeSwitcher switchTheme={switchTheme}/>

                <Login/>

            </Container>
        </>
    )
}