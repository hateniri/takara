"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface MembershipContextType {
  isAuthenticated: boolean;
  accessLevel: "guest" | "member" | "premium";
  login: (accessKey: string) => boolean;
  logout: () => void;
}

const MembershipContext = createContext<MembershipContextType | undefined>(undefined);

const ACCESS_KEYS = {
  member: "TAKARA2025",
  premium: "GOLDSEEKER",
};

export function MembershipProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessLevel, setAccessLevel] = useState<"guest" | "member" | "premium">("guest");
  const router = useRouter();

  useEffect(() => {
    const savedAuth = localStorage.getItem("takara_auth");
    if (savedAuth) {
      const { authenticated, level } = JSON.parse(savedAuth);
      setIsAuthenticated(authenticated);
      setAccessLevel(level);
    }
  }, []);

  const login = (accessKey: string): boolean => {
    if (accessKey === ACCESS_KEYS.member) {
      setIsAuthenticated(true);
      setAccessLevel("member");
      localStorage.setItem("takara_auth", JSON.stringify({ authenticated: true, level: "member" }));
      return true;
    } else if (accessKey === ACCESS_KEYS.premium) {
      setIsAuthenticated(true);
      setAccessLevel("premium");
      localStorage.setItem("takara_auth", JSON.stringify({ authenticated: true, level: "premium" }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAccessLevel("guest");
    localStorage.removeItem("takara_auth");
    router.push("/");
  };

  return (
    <MembershipContext.Provider value={{ isAuthenticated, accessLevel, login, logout }}>
      {children}
    </MembershipContext.Provider>
  );
}

export const useMembership = () => {
  const context = useContext(MembershipContext);
  if (!context) {
    throw new Error("useMembership must be used within MembershipProvider");
  }
  return context;
};