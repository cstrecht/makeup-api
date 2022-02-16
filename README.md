# CHIRO MAKEUP

CHIRO is a fictional and responsive makeup website where you can find makeup from different brands organized by their categories and specific tags.

## Running the project

You can fork this GitHub repository and run `npm start` to run the app in the development mode. Open http://localhost:3000 to view it in your browser.

## About this project

This project was made with [React Router](https://reactrouter.com/) (and with the help of this [tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial)), using the [Makeup API](https://makeup-api.herokuapp.com/).

This was my first project using React library. I chose to use it because I was learning about it and thought this was the perfect time to put it to practice, instead of doing the project using only Vanilla Javascript.

Having that in mind, I needed to route my pages so I decided to use React Router to make it easier for me.

For the API request, I learned about [Axios](https://axios-http.com/docs/example) and decided to use it to perform a GET request to the API, basically because it was more simple for me to understand what was going on.

This fictional website works as a "library" of makeup, where you can find a variety of products, organized by their type (blush, mascara, foundation, lip liner, etc) and a filter list where all the products can be filtered by tags (vegan, water-free, natural, cruelty-free, etc). All the products are displayed by their rating (on a scale of 0 to 100) and you can also check the available colors. Clicking on the product, you can read a description of it, and clicking on the button "Buy me here" will open a real page where you can buy the products.
This project was very challenging and I had some little problems completing all of my goals (more about this topic below), but at the end of the day, I feel very proud of myself for what I accomplished. ☺️

This project was very challenging and I had some little problems completing all of my goals (more about this topic below), but at the end of the day, I feel very proud of myself for what I accomplished.

## My struggles

Although I am very happy with the final result, I had some trouble with the following user issues:

- Paginating the products on the product section;
- Show a loading screen when fetching the data.

I’m looking forward to doing better the next time :) (and I'll keep updating this repository while I am learning)

## Responsiveness

This code was built to be responsive on every screen.

CSS can be very tricky sometimes. But this time I decided not to use any framework because my main focus was on the app navigation and making the API requests functional.

Here is a demo for the desktop version:

![Alt Text](docs/static/desktop_presentation.gif)

And here is a demo for the mobile version:

![alt-text](docs/static/mobile_presentation.gif)
