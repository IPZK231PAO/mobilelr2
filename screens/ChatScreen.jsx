import React from 'react';
import { SectionList } from 'react-native';
import styled from 'styled-components/native';
import ChatItem from '../components/ChatItem';
import { chats } from '../constants/data';

const ChatScreen = () => {
  const sections = [
    {
      title: 'Відкриті чати',
      data: chats.filter(chat => chat.unread),
    },
    {
      title: 'Мої друзі',
      data: chats.filter(chat => !chat.unread),
    },
  ];

  return (
    <Container>
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ChatItem {...item} />}
        renderSectionHeader={({ section }) => (
          <SectionHeader>
            <SectionTitle>{section.title}</SectionTitle>
          </SectionHeader>
        )}
        stickySectionHeadersEnabled={false}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const SectionHeader = styled.View`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 12px 16px;
`;

const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.accent};
  font-weight: bold;
  font-size: 16px;
`;

export default ChatScreen;