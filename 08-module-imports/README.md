
# Module 8 - Working with imports - Laboratory

The objective of this module's lab is to divide the functionality of an application into several files. The application displays in an HTML document a list of a bank's customers, with their accounts (balance and IBAN number).

The starting application is already created, and only consists of two files: HTML (index.html) and Javascript (index.js). We must break the *index.js* file into several, grouping them by functionality.

We will have to have the following javascript files at the end of the laboratory:


- account-business.js
- client-business.js
- client-list-business.js
- data-business.js
- index.js
- style-business.js


In addition, the *index.html* file will only be imported with the *script* tag into *index.js*.

In the *index.js* file itself, the functions are separated by comments so that you know in which file you have to place them:


- account-business.js:
    -- getClientAccountsElement
    -- getAccountElement
- client-business.js:
    -- getClientElement
    -- getClientNode
    -- getFullName
- client-list-business.js
    -- printClientsAccounts
- data-business.js:
    -- getAccounts
    -- getClients
- style-business.js:
    -- getNodeStyle


The *index.js* file will end up with only the following content, plus the imports you need:

    window.onload = function() {
      printClientsAccounts();
    };

To complete the laboratory with the mandatory delivery, you must perform the exercise described in one of the ways to separate files seen in the module. To complete the lab with the extra exercise, two of the ways to separate functionality into files must be delivered.
> 
> 
> **Note**: if you are going to import the different files with the *script* tags from the html document, you must implement it with Visual Studio Code. To use the CommonJS or ES6 modules, you can use a CodeSandbox as seen in the practical session.


> 
> 
> Challenge: set up the development and execution environment with NodeJS, npm and Parcel to make the delivery using the CommonJS and/or ES6 modules running in our local Visual Studio Code.


The starting application is available in the following *CodeSandbox*: [bootcamp-lemoncode-mod8-lab - CodeSandbox](https://codesandbox.io/s/bootcamp-lemoncode-mod8-lab-4fsfk)