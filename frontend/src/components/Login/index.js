import React from 'react'
import { useStateValue } from '../../utils/StateProvider'


import { auth, authProvider } from '../../services/firebase'
import { actionTypes } from '../../utils/reducer'
import usePersistedState from '../../utils/usePersistedState'



export default function Login() {

    const [log, setLog] = usePersistedState('user', null)

    const signIn = () => {
        auth.signInWithPopup(authProvider)
            .then(result => {
                setLog(result.user)
            }
            )
            .catch(error => {
                alert(error.message)
            })
    }
    const signOut = () => {
        auth.signOut()
            .then(result => {
                setLog(null)
            }
            )
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <>
            <button onClick={signIn}>{log?.displayName || 'Login'}</button>
            <button onClick={signOut}>{'logout'}</button>
        </>
    )
}