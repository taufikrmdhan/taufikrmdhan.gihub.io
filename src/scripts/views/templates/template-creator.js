/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant_title">${restaurant.name}</h2>
  <img class="restaurant_poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant_info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods
    .map((food) => `<li>${food.name}</li>`).join('')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks
    .map((drink) => `<li>${drink.name}</li>`).join('')}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant_review">
  <h3>Review</h3>
  <p>${restaurant.customerReviews
    .map(
      (customerReviews) => `
          ${customerReviews.name},
          ${customerReviews.date}:
          ${customerReviews.review}.
          <hr>
          <br>          
        `,
    ).join('')
}</p>
      
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item_header">
        <figure><img class="restaurant-item_header_poster lazyload" alt="${restaurant.name || '-'} "
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId || '-'}"></figure>
        <div class="restaurant-item_header_rating">
            <p>⭐️<span class="restaurant-item_header_rating_score">${restaurant.rating || '-'}</span></p>
        </div>
    </div>
    <div class="restaurant-item_content">
        <h3 class="restaurant_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
        <p>${restaurant.description || '-'}</p>
    </div>
  </div>
  `;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
    Add
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    Remove
  </button>
`;

const createRestaurantNotFoundTemplate = (errorMessage) => `
    <h1 class="restaurant-notfound">${errorMessage}</h1>
`;
export {
  createRestaurantNotFoundTemplate, createRestaurantItemTemplate, createRestaurantDetailTemplate, createFavoriteButtonTemplate, createFavoritedButtonTemplate,
};
