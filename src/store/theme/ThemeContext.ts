import { Nullable, Theme } from "@/types";
import { createContext } from "react";

type ThemeContextValue = {
  theme: Theme;
  changeTheme: (newTheme: Theme) => void;
};
export const ThemeContext = createContext<Nullable<ThemeContextValue>>(null);
