# Module 3 - Operators and Control Flows - Laboratory

## Introduction

For the laboratory of this module, we will calculate the total purchase of a product (its price multiplied by the quantity) and apply the 21% VAT except for the following types of product:

- "food": 10%.
- "book": 4%.

We will work with the following data structure to represent the purchase of a product, which has quantity, unit price, and product type:

        const product = { count: 3, price: 12.55, type: "clothing" };

Negative quantities will not be admitted (in which case it will be taken as 0).

## Calculate total price.

We will create a *getTotal* function that accepts by parameter the reservation of the room, and returns the total price:

- If the count field is zero, *getTotal* must return zero.

- If the count field is greater than zero, you have to return count multiplication by price.

> We may be tempted to directly multiply count by price but we could have negative stock and it would not give us zero.

## Calculate the VAT

We will create a *getVat* function that receives the product and calculates the applicable VAT (per unit) depending on the type of product:

It means:

- A product without VAT has a price.

- The total price is obtained by multiplying the price * vat (the vat can be: 0.1, 0.04, 0.21).

- Depending on the field "type" we calculate the total price:

    - If it is "food": price * 0.1
    - If it is "book": price * 0.04
    - If it is any other type: price * 0.21

>Hint: If we do it using if we are going to have something complicated to read, could we use switch? It would be a good exercise to try both approaches.

## Calculate net salary in payroll

We are going to do a simulation of net salary calculation in payroll (this scenario is simplified, I challenge to look for legislation).

We start from:

- Gross salary year.
- Number of children.
- Number of paychecks.

We have the following structure:

    const employee = {
    gross: 14500,
    children: 2,
    Pages: 14
    }

The conditions:

- By salary range:

    - If the employee earns less than 12,000 euros gross per year apply a 0% withholding
    - If the employee earns less than $24,000 gross per year apply a withholding of 8%
    - If the employee earns less than $34,000 gross per year apply a 16% withholding
    - If the employee earns more than $34,000 gross per year apply a 30% withholding

Additionally:

- If the employee has children, subtract 2 points from the deduction

With this we would get the annual net in the payroll.

Next step, take out the monthly net (if it is fourteen you divide by fourteen, if not by 12)

> Advanced challenge: search for legislation and try to make a complete calculator.

## Advanced

This is a preview of the next module: Using the previous function, we will create one to calculate the total VAT (VAT per unit multiplied by quantity):

This is a function called getTotalVat(product) that returns the number of products ordered multiplied by the price with VAT.

    function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
    }

## Show result by console

From the previous functions, we are going to create one that receives a product, and makes the calculations of total and VAT to display them by console:

    function printProductPrice(product) {
    subtotal const = getTotal(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;

    console.log("Subtotal:", subtotal + "euro");
    console.log("VAT:", vat + "euro");
    console.log("Total:", total + "€");
    }