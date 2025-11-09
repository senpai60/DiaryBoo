import { useContext, createContext, useState, useEffect } from "react";
import { authAPi } from "../api/authApi";
import { diaryApi } from "../api/diaryApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [diaryEntries, setDiaryEntries] = useState([])

  useEffect(() => {
    
    const getUser = async () => {
      const fetchedUser = await verifyUser();
      if (fetchedUser) {
        setUser(fetchedUser)
        await fetchLatestDiaryEntry()
      };
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
      await authAPi.post('/logout',{})
    } catch (err) {
      console.error(err);
    }
  };
  const fetchLatestDiaryEntry = async() =>{
    try {
      const response = await diaryApi.get('/entries')
      setDiaryEntries(response.data?.data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        diaryEntries,
        fetchLatestDiaryEntry,
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
