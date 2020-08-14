import React from 'react'

import { Button } from './styles'

export default function ThemeSwitcher({ switchTheme }) {


    return (
        <>
            <Button onClick={switchTheme} />
        </>
    )
}