import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import ProductDetailsView from './ProductDetailsScreen.view';
import Product from '../../types/Product';
import {View, Text} from 'react-native';
import { productItemMock } from '../../data';

const MockLoader = () => (
  <View testID="mock-loader">
    <Text>Loading...</Text>
  </View>
);

const MockRating = ({rating}: {rating: number}) => (
  <View testID="mock-rating">
    <Text>Rating: {rating}</Text>
  </View>
);
const MockDivider = () => (
  <View
    testID="mock-divider"
    style={{borderBottomWidth: 1, borderBottomColor: 'black'}}
  />
);

jest.mock('../../components', () => ({
  Loader: () => <MockLoader />,
  Rating: ({rating}: {rating: number}) => <MockRating rating={rating} />,
  Divider: () => <MockDivider />,
}));

const mockProduct: Product = productItemMock;

describe('ProductDetailsView', () => {
  test('renders loader when isLoading is true', () => {
    const {getByTestId} = render(<ProductDetailsView isLoading={true} />);
    expect(getByTestId('mock-loader')).toBeTruthy();
  });

  test('renders product details when isLoading is false', async () => {
    const {getByText, getByTestId} = render(
      <ProductDetailsView isLoading={false} productItem={mockProduct} />,
    );

    await waitFor(() => {
      expect(getByText(mockProduct.title)).toBeTruthy();
      expect(getByText(mockProduct.price + ' AED')).toBeTruthy();
      expect(getByTestId('mock-rating')).toBeTruthy();
      expect(getByText(mockProduct.description)).toBeTruthy();
      expect(getByText(`Sold by: ${mockProduct.brand}`)).toBeTruthy();
    });
  });
});
