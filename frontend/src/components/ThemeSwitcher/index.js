import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'


import { Button } from './styles'

export default function ThemeSwitcher({ switchTheme }) {


    return (
        <>
            <Button onClick={switchTheme} onClick/>
        </>
    )
}