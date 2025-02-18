import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("Users")) || null
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

// export function useAuth() {
//   return useContext(AuthContext);
// }

// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//   // const initialAuthUser = localStorage.getItem("Users");
//   const [authUser, setAuthUser] = useState(
//     // initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//     JSON.parse(localStorage.getItem("Users")) || null
//   );
//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// //export const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem("Users");
//   const [authUser, setAuthUser] = useState(
//     //initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//     JSON.parse(localStorage.getItem("Users")) || null
//   );

//   return (
//     <AuthContext.Provider value={{ authUser, setAuthUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
