/* eslint-disable quotes */
/* eslint-disable func-names */
import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate, createRestaurantNotFoundTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-presenter';

const Detail = {
  async render() {
    return `    
    <div id="loading" class="loader"></div>
        <div class="content">
          <h2 class="content_heading">Detail Restaurants</h2>
          <div id="loading-fail"></div>
          <div id="restaurant" class="restaurant"></div>
          <div id="FavoriteButtonContainer"></div>
        </div>
      `;
  },

  async afterRender() {
    try {
      const loading = document.querySelector('#loading');
      window.onload = function () {
        loading.style.display = 'none';
      };
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDbSource.detailRestaurants(url.id);
      const restaurantContainer = document.querySelector('#restaurant');
      window.onload();
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#FavoriteButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          description: restaurant.description,
          rating: restaurant.rating,
        },
      });
    } catch (error) {
      window.onload();
      const loadingFail = document.querySelector("#loading-fail");
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

export default Detail;
