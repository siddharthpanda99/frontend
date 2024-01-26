import { createContext } from "react";
import { UserContextInterface } from "app/interfaces/UserContext.interface";

// export const UserContext = createContext<Partial<UserContextInterface>>({});
const initialState = {
    user: {
    },
    setUser: (user: User) => { },
    updateUser: (key: string, value: any) => { },
} as UserContextInterface;

export const UserContext = createContext<UserContextInterface>(initialState);