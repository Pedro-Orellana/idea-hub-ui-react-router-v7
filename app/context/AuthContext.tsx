import { createContext, useContext, useState, type ReactNode } from "react";

type TempAuthContextType = {
  user: { id: string; name: string; email: string } | null;
  setUser: (user: TempAuthContextType["user"] | null) => void;
  token: string | null;
  setToken: (token: string) => void;
};

const tempAuthContext = createContext<TempAuthContextType | undefined>(
  undefined
);

//creating custom provider to add to root.tsx
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TempAuthContextType["user"]>(null);
  const [token, setToken] = useState("");

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
