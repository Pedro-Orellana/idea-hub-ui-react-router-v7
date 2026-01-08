import { createContext, useContext, useState, type ReactNode } from "react";

type TempAuthContextType = {
  user: string | null;
  setUser: (user: string) => void;
};

const tempAuthContext = createContext<TempAuthContextType | undefined>(
  undefined
);

//creating custom provider to add to root.tsx
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");

  return (
    <tempAuthContext.Provider value={{ user, setUser }}>
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
