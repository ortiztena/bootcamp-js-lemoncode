
# Module 7 - Regular Expressions - Laboratory

## Validate an IBAN

An [IBAN](https://www.iban.es/que-es-iban.html) is an international bank account code, which replaces the old account numbers (ccc).



In this exercise we are going to validate the syntax of an IBAN, that is, if it has been reported with the corresponding letters and digits (we are not going to do a
of the check digit, that will be done in the algorithm module).

**Case 1**

Given this IBAN:

ES6600190020961234567890


- Validate that it is reported with two letters, and the corresponding numbers.


**Case 2**

We will allow spaces to be included in certain areas, we will consider these two chains valid:

ES6600190020961234567890

ES66 0019 0020 9612 3456 7890

**Case 3**

We will extract the country code and the check digit.
## Validate car license plate
**Case 1**

We are going to validate a modern car license plate, it is composed by 4 digits and three letters, patterns to be validated:

2021 GMD

2345-GMD

4532BDB

0320-AAA

**Case 2**

Let's extract the numerical part on one side and the letters on the other.
# Optional
## Extract images from an HTML file
A fun utility is to implement an image vacuum cleaner, that is to say from an HTML extract from all *img* tags the content of *src* in that content we have the URLs to the images.

**Case 1**

From a single line extract the content of src:

    {;img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    //.../.../..;

**Case 2**

From an HTML extract all src's of all img objects:

    {;html};
      {;body};
        &lt;img
          src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
        //.../.../..;
        {;h1}example&lt;/h1
        {;img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        //.../.../..;
      {\pos(192,210)}Body
    {;/html};

## Validate credit card syntax
In our application we have a section for the user to enter the data of his master card, for this we will take into account:


- That a master card has a length of 16 characters (numbers).
- That it has to start with 50,51,52,53,54,55.
- That they are usually grouped in sets of 4 digits.


Example:

5299 6400 0000 0000

**Case 1**

We will validate the following formats (all valid)

5299 6400 0000 0000

5299-6400-0000-0000

5299640000000000

**Case 2**

We will extract each group of four digits.
> 
> 
> If you want to know more credit card validations and how to get numbers to test: https://www.freeformatter.com/credit-card-number-generator-validator.html


## Search for regular expressions
Before we start implementing a regular expression of something standard it is a good idea to look and see if there are implementations we can already start from.

In this exercise you are going to look for a series of regular expressions and validate if the given expression is correct:


- 
    
    Check if a key is strong or not:
        
    - Complex: having at least the following characters: a small letter, a capital letter, a number and a special character.
        
    - Moderate: having at least the following characters: a small letter, a capital letter, a number and at least 8 characters long.
        
    

- 
    
    Validate that a URL is well formed (for example https://www.lemoncode.net or www.lemoncode.net or lemoncode.net).


- 
    
    Validate that a [color in Hexadecimal](https://help.one.com/hc/es/articles/115005593345--Qu%C3%A9-son-los-c%C3%B3digos-de-color-HEX-y-RGBA-) is well formed.
