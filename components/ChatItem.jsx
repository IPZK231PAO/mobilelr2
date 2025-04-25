import React from 'react';
import styled from 'styled-components/native';

const ChatItem = ({ name, lastMessage, time, unread, avatar }) => (
  <Container>
    <Avatar source={{ uri: avatar }} />
    <Content>
      <TopRow>
        <Name>{name}</Name>
        <Time>{time}</Time>
      </TopRow>
      <BottomRow>
        <Message>{lastMessage}</Message>
        {unread && <UnreadBadge />}
      </BottomRow>
    </Content>
  </Container>
);

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.cardBackground};
  margin: 4px 16px;
  border-radius: 8px;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 16px;
`;

const Content = styled.View`
  flex: 1;
`;

const TopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const Name = styled.Text`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 16px;
`;

const Time = styled.Text`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 12px;
`;

const BottomRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Message = styled.Text`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
  flex: 1;
`;

const UnreadBadge = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.accent};
  margin-left: 8px;
`;

export default ChatItem;