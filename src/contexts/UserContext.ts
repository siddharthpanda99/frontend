import { Dispatch, SetStateAction, createContext } from "react";

export type User = {
    email: string,
    password: string,
    acceptedPolicy: boolean,
    token: string,
    userData: [],
    loggedIn: boolean
}

export interface UserContextInterface {
    user: User,
    setUser: Dispatch<SetStateAction<User>>,
    updateUser: (key: string, value: any) => void,
    // loggedIn: boolean,
    // setLoggedIn: Dispatch<SetStateAction<boolean>>,
}

// export const UserContext = createContext<Partial<UserContextInterface>>({});
const initialState = {
    user: {
        email: '',
        password: '',
        acceptedPolicy: false,
        token: '',
        userData: [],
        loggedIn: false
    },
    setUser: (user: User) => { },
    updateUser: (key: string, value: any) => { },
} as UserContextInterface;

export const UserContext = createContext<UserContextInterface>(initialState);