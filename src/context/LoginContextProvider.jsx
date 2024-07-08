import React, {Children, createContext, useState} from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({Children}) => {
    const [userDetails, setUserDetails] = useState(true);
  return (
        <LoginContext.Provider value={userDetails}>
            {Children}
        </LoginContext.Provider>
  )
}

export default LoginContextProvider