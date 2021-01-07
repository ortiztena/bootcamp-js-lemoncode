# Module 6 - Algorithms I - Laboratory

## Shopping Cart

## Introduction

We will implement a shopping cart where the user can choose the units he wants of each product, from a given list of products.

We will therefore have a section describing the list of products and selectors to choose the desired units, a button to calculate the invoice, and an area with the invoice broken down showing the subtotal, taxes and total amount.

## Invoice calculation

When clicking on the calculate button, the user should receive the breakdown of the invoice through 3 fields: subtotal, tax and total.

To calculate the invoice, go through your product list with a loop and make the relevant calculations for each product:

The total price of a product will be the unit price * units.
The VAT to be paid for a product will be total product price * VAT / 100.

## Summary of steps

Prepare an HTML with the header, the calculate button, and the fields for the subtotal, tax and total invoice. However, don't make any elements for the products, that must be done from JS. If you need to create some `<div>`, identify it with some id that will serve as an entry point to "hook" your product list.
Implement an algorithm that generates from Javascript the necessary HTML elements to display a list of products with their description, unit price and an input of units for each one.
Prepare an algorithm that calculates the invoice when we press the calculate button and displays the result in the subtotal, tax and total fields.

## Extra

- Try to have the Calculate button enabled or disabled depending on whether the user has chosen at least 1 unit of any product or not. That is to say:

- If the units of all products are set to 0, the calculate button is disabled.
- If there is at least 1 product with 1 unit selected, the calculate button must be enabled.