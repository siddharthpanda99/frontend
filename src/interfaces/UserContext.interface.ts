import { Dispatch, SetStateAction } from "react";
import { User } from "app/types/User";

export interface UserContextInterface {
    user: User,
    setUser: Dispatch<SetStateAction<User>>,
    updateUser: (key: string, value: any) => void,
    // loggedIn: boolean,
    // setLoggedIn: Dispatch<SetStateAction<boolean>>,
}