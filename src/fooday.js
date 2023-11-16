import { useEffect, useState } from "react"
import { useApi } from './ApiProvider'
import { useFirebaseUser } from "./firebase"

/**
 *
 * @returns {import('./api/generated').User}
 */
export const useFoodayUser = () => {
    const [user, setUser] = useState()
    const api = useApi()
    const firebaseUser = useFirebaseUser()

    useEffect(() => {
        if (firebaseUser) {
            api.user.me().then(setUser).catch(err => {
                setUser(undefined)
                if (err.body?.code !== 10013 && err.body?.code !== 10003 && err.body?.code !== 10001) {
                    console.warn(err)
                    alert('Failed to sign in')
                }
            })
        } else {
            setUser(undefined)
        }
    }, [firebaseUser])

    return user
}