import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { FoodayRestClient } from "./api/generated";
import { initializeAppCheck, getToken, ReCaptchaV3Provider } from 'firebase/app-check';
import { app } from './firebase'
import { getAuth } from "firebase/auth";

const apiContext = createContext()

const getAppCheckToken = async () => {
    const provider = new ReCaptchaV3Provider(process.env.REACT_APP_RECAPTCHA_KEY)
    const appCheck = initializeAppCheck(app, { provider, isTokenAutoRefreshEnabled: true })
    const { token } = await getToken(appCheck)
    return token
}

const getUserToken = async () => {
    const auth = getAuth(app)
    const token = await auth.currentUser?.getIdToken() ?? Promise.resolve()
    return token
}

export const ApiProvider = ({ children }) => {
    const [api] = useState(() => {
        return new FoodayRestClient({
            BASE: process.env.REACT_APP_API,
            TOKEN: getUserToken,
            WITH_CREDENTIALS: false,
            CREDENTIALS: 'include',
            HEADERS: async () => ({
                'X-APP-CHECK-TOKEN': await getAppCheckToken(),
            }),
        })
    })

    return (
        <apiContext.Provider value={api}>
            {children}
        </apiContext.Provider>
    )
}

/**
 *
 * @returns {FoodayRestClient}
 */
export const useApi = () => {
    const api = useContext(apiContext)
    if (!api) {
        throw new Error('useApi must be used within ApiProvider')
    }
    return api
}
