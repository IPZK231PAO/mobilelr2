import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { ThemeProvider as CustomThemeProvider, useTheme } from './contexts/ThemeContext';
import AppNavigator from './navigation/AppNavigator';

const ThemeWrapper = ({ children }) => {
  const { theme } = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default function App() {
  return (
    <CustomThemeProvider>
      <ThemeWrapper>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeWrapper>
    </CustomThemeProvider>
  );
}