/* eslint-disable func-names */
import FavoriteRestaurantIdb from '../../data/favoriteresto-idb';
import { createRestaurantItemTemplate, createRestaurantNotFoundTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
       <div id="loading" class="loader"></div>
          <div class="content">
            <h2 class="content_heading">Your Favorited Restaurants</h2>
            <div id="loading-fail"></div>
            <div id="restaurants" class="restaurants">
            </div>
          </div>
        `;
  },

  async afterRender() {
    try {
      const loading = document.querySelector('#loading');
      window.onload = function () {
        loading.style.display = 'none';
      };
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      const restaurantsContainer = document.querySelector('#restaurants');
      window.onload();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      window.onload();
      const loadingFail = document.querySelector('#loading-fail');
      let errorMessage;
      if (error.message === 'Failed to fetch') {
        errorMessage = 'Please, check your internet connection';
      } else {
        errorMessage = 'Sorry, something wrong';
      }
      loadingFail.innerHTML = createRestaurantNotFoundTemplate(errorMessage);
    }
  },
};

export default Favorite;
