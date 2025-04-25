import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import PostCard from '../components/PostCard';
import { posts } from '../constants/data';

const CommunityScreen = () => (
  <Container>
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostCard {...item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 8 }}
    />
  </Container>
);

const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.background};
`;

export default CommunityScreen;