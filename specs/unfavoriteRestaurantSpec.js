/* eslint-disable max-len */
// /* eslint-disable max-len */
/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriteresto-idb';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
};

describe('Unfavoriting A Restaurant', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unfavorite widget when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the movie has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="favorite this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove favorited movie from the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
