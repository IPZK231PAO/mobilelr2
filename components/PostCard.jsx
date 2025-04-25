import React from 'react';
import styled from 'styled-components/native';

const PostCard = ({ author, time, title, content, likes, comments }) => (
  <Container>
    <Header>
      <Author>{author}</Author>
      <Time>{time}</Time>
    </Header>
    <Title>{title}</Title>
    <Content>{content}</Content>
    <Stats>
      <StatItem>❤️ {likes}</StatItem>
      <StatItem>💬 {comments}</StatItem>
    </Stats>
  </Container>
);

const Container = styled.View`
  background: ${({ theme }) => theme.cardBackground};
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Author = styled.Text`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
`;

const Time = styled.Text`
  color: #666;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Content = styled.Text`
  color: ${({ theme }) => theme.text};
  line-height: 20px;
`;

const Stats = styled.View`
  flex-direction: row;
  gap: 16px;
  margin-top: 12px;
`;

const StatItem = styled.Text`
  color: #666;
`;

export default PostCard;