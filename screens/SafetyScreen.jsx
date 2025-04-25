import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../contexts/ThemeContext';

const SafetyScreen = () => {
  const { theme } = useTheme();
  const [code, setCode] = useState(generateCode());
  const [timeLeft, setTimeLeft] = useState(30);

  // Генерація 6 випадкових букв
  function generateCode() {
    return Array.from({ length: 6 }, () => 
      String.fromCharCode(65 + Math.floor(Math.random() * 26))
    ).join(' ');
  }

  // Таймер
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCode(generateCode());
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Title>Код безпеки</Title>
      
      <CodeContainer>
        <CodeText>{code}</CodeText>
      </CodeContainer>

      <TimerContainer>
        <TimerBar width={(timeLeft / 30) * 100 + '%'} theme={theme} />
        <TimerText>{timeLeft} сек до оновлення</TimerText>
      </TimerContainer>

      <InfoText>Використовуйте цей код для підтвердження операцій</InfoText>
    </Container>
  );
};

// Стилі
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 24px;
  align-items: center;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const CodeContainer = styled.View`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

const CodeText = styled.Text`
  color: ${({ theme }) => theme.accent};
  font-size: 32px;
  letter-spacing: 8px;
  font-weight: bold;
`;

const TimerContainer = styled.View`
  width: 80%;
  margin-bottom: 24px;
`;

const TimerBar = styled.View`
  height: 4px;
  width: ${({ width }) => width};
  background-color: ${({ theme }) => theme.accent};
  border-radius: 2px;
  margin-bottom: 8px;
`;

const TimerText = styled.Text`
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  font-size: 14px;
`;

const InfoText = styled.Text`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
`;

export default SafetyScreen;