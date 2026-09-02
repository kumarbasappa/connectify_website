"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes";

interface CustomThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
  mounted: boolean;
}

const CustomThemeContext = createContext<CustomThemeContextType>({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
  mounted: false,
});

function ThemeStateWrapper({ children }: { children: React.ReactNode }) {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const currentTheme = mounted ? (theme || resolvedTheme || "dark") : "dark";

  return (
    <CustomThemeContext.Provider
      value={{
        theme: currentTheme,
        setTheme,
        toggleTheme,
        mounted,
      }}
    >
      {children}
    </CustomThemeContext.Provider>
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <ThemeStateWrapper>{children}</ThemeStateWrapper>
    </NextThemesProvider>
  );
}

export function useTheme() {
  return useContext(CustomThemeContext);
}
