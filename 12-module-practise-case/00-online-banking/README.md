# Module 12 - Online Banking Case Study - Laboratory

In this module we will work with a more complete application. We will simulate an online banking portal, where we will show a list of account movements, as well as a bank transfer form.

## Application

This application therefore consists of several pages that we will be implementing little by little.

### Login

Here we will have the main page to access our application or login page.

![pagina-login](./src/img/01-imagen-login.png)

On this page we will implement:


- Collect the values of the form.
- Add validations to the fields.
- Send the information to the server using an API method.
- Depending on whether the login is valid we will show an error message (if it has failed) or we will navigate to the next page (account list).


### List of accounts

Page with the available accounts of the logged in user.

![pagina-account-list](./src/img/02-imagen-account-list.png)

![pagina-account-list](./src/img/03-imagen-navigate-to-selected.png)

![pagina-account-list](./src/img/04-imagen-navigate-to-new-account.png)

On this page we will implement:


- Recover the available server accounts.
- Navigate to the transfer or movement page of a selected account.
- Navigate to new account creation


### Account

Page to create or edit account

![pagina-account](./src/img/05-imagen-account.png)

![pagina-account](./src/img/06-imagen-navigate-edit-account.png)

![pagina-account](./src/img/07-imagen-edit-account.png)

On this page we will implement:


- Collect the values of the form.
- Add validations to the fields.
- Send the information to the server using an API method.
- Collect parameters from the url to see if it is create or edit mode.


### Movements

Page to consult the movements of an account.

![pagina-movements](./src/img/08-imagen-movements.png)



- Collect parameters from the url to see the account id.
- Retrieve the available movements of that account.


### Transference
Page to send a transfer.

![pagina-transfer](./src/img/09-imagen-transfer.png)


- Collect parameters from the url to see the account id.
- Collect form values.
- Add validations to the fields.
- Send the information to the server using an API method.
