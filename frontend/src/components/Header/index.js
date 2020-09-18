import React from 'react'
// import { useStateValue } from '../../utils/StateProvider'

import { Container } from './styles'
import ThemeSwitcher from '../ThemeSwitcher'
import Login from '../Login'
import { auth, currentUser } from '../../services/firebase'



export default function Header({ switchTheme }) {

    return (
        <>
            <Container>

                <p>{currentUser?.displayName}</p>
                {/* <img src={user?.photoURL}></img> */}
                <ThemeSwitcher switchTheme={switchTheme}/>

                <Login/>

            </Container>
        </>
    )
}