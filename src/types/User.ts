export type User = {
    user_id: number;
    email: string,
    password: string,
    acceptedPolicy: boolean,
    token: string,
    userData: [],
    loggedIn: boolean
}