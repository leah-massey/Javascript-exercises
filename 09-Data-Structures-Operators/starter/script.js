'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const nested = [2, 4, [5, 6]];

//destructure the first and last elements of the array
const [first, , last] = nested;
console.log(first, last);

//nested destructuring of the same two elements
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Defauly values (when we don't know the array - useful when we get data from an api)
const [p, q, r] = [8, 9]; //this won't work as 'r' doesn't have a value
const [p = 1, q = 1, r = 1] = [8, 9]; //this will now work and 'r' will have the value of 1
