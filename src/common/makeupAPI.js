const axios = require("axios");
const url = "http://makeup-api.herokuapp.com/api/v1/products.json";

export function getProductsByTypeAndTags(product_type, product_tags) {
  axios
    .get(url, {
      params: {
        product_type: product_type,
        product_tags: product_tags,
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    })
    .then(function (products) {
      return products;
    });
}
