import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import WishListScreen from './WishListScreen.view';
import { NavigationContainer } from '@react-navigation/native';
import { wishlistMock } from '../../data';

describe('WishlistView', () => {
  test('renders emptyWishList when list is empty', () => {
    const {getByTestId} = render(
    <NavigationContainer>    
        <WishListScreen wishlist={[]} removeFromWishlistHandler={()=>{}} addToCartHandler={()=>{}}/>
    </NavigationContainer>
    )
    expect(getByTestId('empty-wishlist')).toBeTruthy();
  });

  test('renders wishlist when list is NOT empty', async () => {
    const {getByTestId} = render(
        <NavigationContainer>
            <WishListScreen wishlist={wishlistMock} removeFromWishlistHandler={()=>{}} addToCartHandler={()=>{}} />
        </NavigationContainer>
    );

    await waitFor(() => {
      expect(getByTestId('wishlist')).toBeTruthy();
    });
  });
});
