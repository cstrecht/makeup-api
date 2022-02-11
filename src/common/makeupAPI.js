const axios = require("axios");
const url = "https://makeup-api.herokuapp.com/api/v1";

export function getProductsByTypeAndTags(category_type, product_tags) {
  return (
    axios
      .get(url + "/products.json", {
        params: {
          product_type: category_type,
          product_tags: product_tags,
        },
      })
      .then((response) => response.data)
      .catch((error) => error)
      //Sorting the products by rating:
      .then((products) =>
        products.sort(function (a, b) {
          return b.rating - a.rating;
        })
      )
  );
}

// Obtains an item through an ID
export function getProductById(product_id) {
  return axios
    .get(url + "/products/" + product_id + ".json")
    .then((response) => response.data)
    .catch((error) => error);
}
