import { useContext, createContext, useState, useEffect } from "react";
import { authAPi } from "../api/authApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const fetchedUser = await verifyUser();
      if (fetchedUser) setUser(fetchedUser);
      setLoading(false);
    };
    getUser();
  }, []);

  const verifyUser = async () => {
    try {
      const response = await authAPi.get("/verifyUser");
      return response.data?.data;
    } catch (err) {
      console.error(err);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await authAPi.post("/login", { email, password });
      const userData = await verifyUser();
      setUser(userData);
    } catch (err) {
      console.error(err);
    }
  };
  const signupUser = async (username, email, password, dob) => {
    try {
      await authAPi.post("/signup", { username, email, password, dob });
      const userData = await verifyUser();
      setUser(userData);
    } catch (err) {
      console.error(err);
    }
  };

  const logoutUser = async () => {
    try {
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginUser,
        signupUser,
        logoutUser,
        verifyUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
