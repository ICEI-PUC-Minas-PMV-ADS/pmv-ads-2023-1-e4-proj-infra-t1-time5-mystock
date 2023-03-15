import React, { useState, createContext, useContext, useEffect } from "react";
import http from "../services/http";
import { useQueryClient } from "react-query";

const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [token]);

  async function login(reqData) {
    const { data } = await http.post("api/Usuarios/Autenticacao", reqData);
    setUser(data);
    setToken(data.jwtToken);
    localStorage.setItem("token", data.jwtToken);
  }

  async function signUp(reqData) {
    const { data } = await http.post("api/Usuarios/", reqData);
    setUser(data);
    setToken(data.jwtToken);
    localStorage.setItem("token", data.jwtToken);
  }

  async function logout() {
    setUser(null);
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <authContext.Provider
      value={{
        user,
        login,
        signUp,
        logout,
        token,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export default function useAuth() {
  return useContext(authContext);
}
