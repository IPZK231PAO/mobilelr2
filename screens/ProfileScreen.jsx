import React from 'react';
import { Switch } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../contexts/ThemeContext';

const ProfileScreen = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Section>
        <Title>Налаштування</Title>
        <SettingItem>
          <SettingText>Темна тема</SettingText>
          <Switch
            value={theme.isDark} // Використовуємо властивість isDark
            onValueChange={toggleTheme}
            thumbColor={theme.accent}
            trackColor={{ 
              false: theme.secondary, 
              true: theme.accent 
            }}
          />
        </SettingItem>
      </Section>
    </Container>
  );
};

// Стилі
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`;

const Section = styled.View`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  padding: 16px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const SettingItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

const SettingText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;

export default ProfileScreen;