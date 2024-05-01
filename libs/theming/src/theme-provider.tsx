import React, { PropsWithChildren } from 'react';
import { defaultTheme } from './default-theme';

export type ThemeProviderProps<T extends typeof defaultTheme> = {
  theme: T;
};

export function DefaultThemeProvider({ children }: PropsWithChildren) {
  const ThemeContext: React.Context<typeof defaultTheme> =
    React.createContext(defaultTheme);

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeProvider<T extends typeof defaultTheme>({
  theme,
  children,
}: PropsWithChildren<ThemeProviderProps<T>>) {
  const ThemeContext: React.Context<typeof theme> = React.createContext(theme);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
