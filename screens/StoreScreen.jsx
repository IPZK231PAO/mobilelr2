import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import GameCard from '../components/GameCard';
import { games } from '../constants/data';

const StoreScreen = () => (
  <Container>
    <FlatList
      data={games}
      renderItem={({ item }) => <GameCard {...item} />}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={{ padding: 8 }}
    />
  </Container>
);

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export default StoreScreen;