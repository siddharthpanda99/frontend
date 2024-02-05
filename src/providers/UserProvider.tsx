import { useState, ReactNode } from "react";
import { UserContext } from "contexts/UserContext";
import { User } from "app/types/User";

type UserProviderProps = {
  children: ReactNode;
};

const localUser = JSON.parse(localStorage.getItem("user"));

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>(
    localUser || {
      username: "john@example.com",
      password: "password123",
      loggedIn: false,
      acceptedPolicy: false,
      userData: [],
      id: 0,
      token: "",
    }
  );

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
