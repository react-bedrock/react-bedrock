import { Theme } from "./theme";

export const defaultTheme: Theme = {
  isDarkTheme: false,
  toggleTheme: () => {
    defaultTheme.isDarkTheme = !defaultTheme.isDarkTheme
  }
};
