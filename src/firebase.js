import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, OAuthProvider, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { useCallback, useEffect, useState } from 'react';

const config = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)

export const app = initializeApp(config)

/**
 *
 * @returns {import('firebase/auth').User}
 */
export const useFirebaseUser = () => {
    const [user, setUser] = useState(app.currentUser)

    useEffect(() => {
        const auth = getAuth(app)
        auth.languageCode = navigator.language
        const unsubscribe = auth.onAuthStateChanged(setUser)
        return () => unsubscribe()
    }, [])

    return user
}

export const useFirebaseSignIn = () => {
    return useCallback(async (providerName) => {
        const provider = getProvider(providerName)
        const auth = getAuth(app)
        try {
            await signInWithPopup(auth, provider)
        } catch (err) {
            console.warn(err)
            throw new Error('Failed to sign in')
        }
    }, [])
}

export const useFirebaseSignOut = () => {
    return useCallback(async () => {
        const auth = getAuth(app)
        try {
            await auth.signOut()
        } catch (err) {
            console.warn(err)
            throw new Error('Failed to sign in')
        }
    }, [])
}

const getProvider = (providerName) => {
    switch (providerName) {
        case 'facebook':
            return new FacebookAuthProvider()
        case 'google':
            return new GoogleAuthProvider()
        case 'apple':
            return new OAuthProvider('apple.com')
        default:
            throw new Error(`Unknown provider ${providerName}`)
    }
}