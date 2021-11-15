/* eslint-disable no-undef */
const assert = require('assert');

Feature('liking Restaurant');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.dontSeeElement('.restaurant-item');
});
Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('.content_heading');
  I.amOnPage('/');
  I.seeElement('.restaurant_title a');
  const firstRestaurant = locate('.restaurant_title a').first();
  const firstRestaurantsTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantsTitle = await I.grabTextFrom('.restaurant_title a');
  assert.strictEqual(firstRestaurantsTitle, likedRestaurantsTitle);
});
