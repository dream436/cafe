import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{ setUser , user }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
