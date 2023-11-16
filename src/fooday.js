import { useEffect, useState } from "react"
import { useApi } from './ApiProvider'
import { useFirebaseUser } from "./firebase"

/**
 *
 * @returns {import('./api/generated').User}
 */
export const useFoodayUser = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState()
    const api = useApi()
    const firebaseUser = useFirebaseUser()

    useEffect(() => {
        if (firebaseUser) {
            setLoading(true)
            api.user.me().then(user => {
                setUser(user)
                setLoading(false)
            }).catch(err => {
                setUser(undefined)
                setLoading(false)
                if (err.body?.code !== 10013 && err.body?.code !== 10003 && err.body?.code !== 10001) {
                    console.warn(err)
                    alert('Failed to sign in')
                }
            })
        } else {
            setUser(undefined)
        }
    }, [firebaseUser])

    return { user, loading }
}