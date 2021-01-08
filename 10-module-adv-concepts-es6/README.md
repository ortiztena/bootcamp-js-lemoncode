# Module 10 - Advanced Concepts ES6 - Laboratory

## Exercises


### hasId
Implements a function called hasId that admits as a parameter an object and checks if that object has a property called id (must return boolean true/false).

TIP: Do not access 'id' with a dot (.) or with square brackets ([]).

### head
It implements a function called head such that, given an array as input, it returns the first element.

TIP: Do not use the bracket ([]) to access the 0 position.

### tail
It implements a function called tail such that, given an array as input, it returns a new array with all elements except the first one.

TIP: The input array must not be modified. Think about destructuring and subtracting.

### swapFirstToLast
It implements a function called swapFirstToLast such that, given an array as input, it returns a new array where the first element has been placed in the last position.

TIP: The input array must not be modified. Think about destructuring and subtracting.

### excludeId
It implements a function called excludeId such that, given an object as input, it returns that cloned object except for the id property if any.

TIP: Do not modify the input object. Think about destructuring and subtracting.

### wordsStartingWithA
It implements a function called wordsStartingWithA such that, given an array of words as input, it returns another filtered array with those words starting with a.

TIP: Don't use loops.

### concat
It implements a function called concat so that it admits multiple arguments of type string and returns another string with the concatenation of all, separated by |.

TIP: Don't use loops.

### multArray
It implements a function called multArray that supports an array of numbers (arr) and another parameter that is a number (x) and returns a new array where each element has been multiplied by x.

TIP: Don't use loops.

### calcMult
It implements a function called calcMult that supports multiple numbers as an argument and returns the product of all of them as a result.

TIP: Don't use loops.

## Extra exercises
swapFirstSecond
It implements a swapFirstSecond function such that given an array, it returns a new array where the first element has been exchanged for the second.

TIP: Do not modify the original input array.

### firstEqual
It implements a function firstEqual that admits multiple strings as an input argument as well as any character, and returns a boolean indicating whether all strings start with that character or not.

TIP: Do not use loops. Do not access the first character with square brackets ([]).

### longest
It implements a longest function that supports multiple arrays as input, and returns the longest array.

TIP: Don't use loops. There are several ways to do this.

### searchInStringV1
It implements a function called searchInStringV1 such that given a string as a parameter and also a character, it returns how many times that character appears in the string.

TIP: Do not use loops.

TIP: Convert the string to an array using Array.from().

### searchInStringV2
It implements the same exercise as before, calling the searchInStringV2 function, finding another unused reduce alternative.

TIP: Don't use loops.

TIP: Convert the string to an array using Array.from().

### sortCharacters
It implements a function called sortCharacters such that given a string, it returns it with its letters sorted alphabetically.

TIP: Don't use loops. Do not modify the original input string.

TIP: Convert the string to an array using Array.from().

### shout
It implements a function called shout so that, given multiple words as input, it returns all the words concatenated in a text where they appear in capital letters and with exclamation marks.

TIP: Do not use loops.

### Shopping list
Given the following shopping list:

    const shoppingCart = [
    { category: "Fruits and Vegetables", product: "Lettuce", price: 0.8, units: 1 },
    { category: "Meat and Fish", product: "Chicken Breast", price: 3.75, units: 2 },
    { category: "Drugstore", product: "Shower Gel", price: 1.15, units: 1 },
    { category: "Drugstore", product: "Kitchen paper", price: 0.9, units: 3 },
    { category: "Fruits and Vegetables", product: "Watermelon", price: 4.65, units: 1 },
    { category: "Fruits and Vegetables", product: "Leek", price: 4.65, units: 2 },
    { category: "Meat and Fish", product: "Iberian secret", price: 5.75, units: 2 },
    ];

A. Get a new list where the VAT (21%) of each product appears.

B. Sort the list from more to less units.

C. Obtain the subtotal spent in drugstore.

D. Obtain the list by console in "Product -> Total Price £" format and sorted by category.

TIP: Do not use loops.