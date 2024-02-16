import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import HomeScreenView from './HomeScreen.view';
import Product from '../../types/Product';
import {NavigationContainer} from '@react-navigation/native';
import { productsMock } from '../../data';

const mockProducts: Product[] = productsMock;

describe('HomeScreenView', () => {
  test('renders loader when isLoading is true', () => {
    const {getByTestId} = render(<HomeScreenView isLoading={true} />);
    expect(getByTestId('loader')).toBeTruthy();
  });

  test('renders products when isLoading is false', async () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <HomeScreenView isLoading={false} products={mockProducts} />
      </NavigationContainer>,
    );

    await waitFor(() => {
      expect(getByTestId('1')).toBeTruthy();
      expect(getByTestId('2')).toBeTruthy();
    });
  });

  test('renders list header text', () => {
    const {getByText} = render(
      <NavigationContainer>
        <HomeScreenView isLoading={false} products={mockProducts} />
      </NavigationContainer>,
    );

    expect(getByText('Products')).toBeTruthy();
  });
});
