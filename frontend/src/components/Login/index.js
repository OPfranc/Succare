import React from 'react'
import { auth, authProvider } from '../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';


export default function Login() {

    const [user2, loading, error] = useAuthState(auth);


    function signIn() {
        auth.signInWithPopup(authProvider).catch(error => {
            alert(error.message)
        })
    }
    function signOut() {
        auth.signOut().catch(error => {
            alert(error.message)
        })
    }

    const loginButton = (
        <button onClick={signIn}>{user2?.displayName || 'Login'}</button>
    )
    const logoutButton = (
        <button onClick={signOut}>{'logout'}</button>
    )

    return (
        <>
            <h2>{loading ? 'Carregando...' : user2?.displayName}</h2>
            {user2 ? logoutButton : loginButton}
        </>
    )
}