import React from 'react';
import styled from 'styled-components/native';

const GameCard = ({ title, price, discount, platform, image }) => (
  <Card>
    <Thumbnail source={{ uri: image }} />
    <Content>
      <Title>{title}</Title>
      <Platform>{platform}</Platform>
      <PriceContainer>
        {discount && <Discount>-{discount}%</Discount>}
        <Price>${price}</Price>
      </PriceContainer>
    </Content>
  </Card>
);

const Card = styled.View`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 4px;
  margin: 8px;
  width: 48%;
  overflow: hidden;
`;

const Thumbnail = styled.Image`
  width: 100%;
  height: 150px;
`;

const Content = styled.View`
  padding: 12px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Platform = styled.Text`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 12px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

const Discount = styled.Text`
  color: ${({ theme }) => theme.discount};
  margin-right: 8px;
  font-weight: bold;
`;

const Price = styled.Text`
  color: ${({ theme }) => theme.accent};
  font-weight: bold;
  font-size: 16px;
`;

export default GameCard;