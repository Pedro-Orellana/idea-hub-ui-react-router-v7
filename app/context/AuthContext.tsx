import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { setStoredAccessToken } from "~/lib/accessToken";

type TempAuthContextType = {
  user: { id: string; name: string; email: string } | null;
  setUser: (user: TempAuthContextType["user"] | null) => void;
  token: string | null;
  setToken: (token: string) => void;
};

const tempAuthContext = createContext<TempAuthContextType | undefined>(
  undefined,
);

//creating custom provider to add to root.tsx
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TempAuthContextType["user"]>(null);
  const [token, setToken] = useState("");

  //this is used to refresh the token every time
  //the user refreshes the page
  //useEffect(() => {}, []);

  //this is used to set the token every time it changes
  //saved in that file where it can be accessed even when state cannot be accessed
  useEffect(() => {
    console.log(`value of token: ${token}`);
    setStoredAccessToken(token);
  }, [token]);

  return (
    <tempAuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </tempAuthContext.Provider>
  );
};

//custom hook used to get the information stored in the context provider
export const useAuth = () => {
  const context = useContext(tempAuthContext);
  if (!context) {
    throw new Error("context must be used within a provider");
  }

  return context;
};
