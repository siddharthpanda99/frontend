import { useState, ReactNode } from "react";
import { UserContext, User } from "contexts/UserContext";


type UserProviderProps = {
    children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User>({
      email: "john@example.com",
      password: "password123",
      loggedIn: false,
      acceptedPolicy: false,
      userData: [],
      token: "",
    });

    const updateUser = (key: string, value: any) => {
      setUser({
        ...user, // Copy the old fields
        [key]: value, // But override this one
      });
    };

    return (
      <UserContext.Provider value={{ user, setUser, updateUser }}>
        {children}
      </UserContext.Provider>
    );
};

export default UserProvider;