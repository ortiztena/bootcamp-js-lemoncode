
# Module 2 - Variables and data types - Laboratory

For this laboratory we are going to put into practice the concepts that we have given in the previous modules.

The idea is to create a review to rate a hotel.

Objectives:
 
Create a simple HTML where the following fields are completed using JavaScript:
        
- Name of the hotel.
        
- Location of the hotel.
        
- Image of the hotel (can be via URL).
        

- Ask the user for the score he gives and display it in the HTML.

- Ask the user if they want their review to be anonymous or not.

Optional:

- Create two or three hotels and allow the user to review one of them.
- Let the score given by the user be the typical star rating.

Requirements:

**NO** functions, methods or flow controls can be used since we have not given them yet. Try to think how you would do it if you only had the tools that have been given in these two modules.

- - -

## 1. We build the HTML structure

* First, we create the `index.html` file

*./index.html*

    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="site.css" />
      <title>Reseña hotel</title>
    </head>

    <body>
      <h1>Reseña hotel</h1>
      <div class="row">
        <div class="col-50">

          <div class="container">
            <div class="row">

              <div class="col-50">
                <h3 id="name-hotel">Hotel Desconocido</h3>
                <h4 id="location-hotel">Desconocida</h4>
              </div>

              <div class="col-50">
                <img class="image" id="img-hotel" src="" alt="Foto hotel">
              </div>

            </div>
          </div>
        </div>

        <div class="col-50">
          <div class="container">
            <p class="stars">Puntuación: <span id="rating"></span></p>
            <hr>
            <p>Reseña anónima <input type="checkbox" id="anonymous"></p>
          </div>
        </div>

    </body>

    </html>

* We added a `site.css` style file

*./site.css*

    body {
      font-family: Arial, Helvetica, sans-serif;
    }
    
    .row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -16px;
    }
    
    .container {
      background-color: #f2f2f2;
      padding: 5px 20px 15px 20px;
      border: 1px solid lightgrey;
      border-radius: 3px;
    }
    
    .col-50 {
      flex: 50%;
      padding: 16px;
      box-sizing: border-box;
    }
    
    .image {
      height: 200px;
      width: 400px;
    }

## 2. We create our JavaScript code

### 1. Complete essential hotel data

We will make the first objective that is to fill in from JavaScript the name, location and image of the hotel.

* First we remove content that we don't need.

*./app.js*

    // Objetivo 1 [Datos del hotel]
    var hotel = {
      name: "Mencey",
      location: "Tenerife",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
    };
    
    document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
    document.getElementById("location-hotel").innerHTML =
      "Ubicado en " + hotel.location;
    document.getElementById("img-hotel").src = hotel.img;

* We link to *index.html* our JavaScript file

*./index.html*

    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="site.css" />
      <title>Reseña hotel</title>
    </head>

    <body>
      <h1>Reseña hotel</h1>
      <div class="row">
        <div class="col-50">

          <div class="container">
            <div class="row">

              <div class="col-50">
                <h3 id="name-hotel">Hotel Desconocido</h3>
                <h4 id="location-hotel">Desconocida</h4>
              </div>

              <div class="col-50">
                <img class="image" id="img-hotel" src="" alt="Foto hotel">
              </div>

            </div>
          </div>
        </div>

        <div class="col-50">
          <div class="container">
            <p class="stars">Puntuación: <span id="rating"></span></p>
            <hr>
            <p>Reseña anónima <input type="checkbox" id="anonymous"></p>
          </div>
        </div>

        <script src="app.js"></script>

    </body>

    </html>

* Una vez comprobamos que se muestra correctamente todos los datos, vamos a por el siguiente objetivo.

### 2. Show user's score

Now it is a matter of asking the user what score he or she gives and displaying it in the corresponding field.

* We edit our script to enter the necessary sentences. As a first approximation, we can simply tell you to enter the number of stars you assign to it.

*./app.js*

    // Objetivo 1 [Datos del hotel]
    var hotel = {
      name: "Mencey",
      location: "Tenerife",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
    };
    
    document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
    document.getElementById("location-hotel").innerHTML =
      "Ubicado en " + hotel.location;
    document.getElementById("img-hotel").src = hotel.img;
    
    // Objetivo 2 [Puntuación del hotel]
    var rating = prompt("Puntuación: del 1 al 5");
    
    document.getElementById("rating").innerHTML = rating + " estrellas";

* We check that the number of stars is correctly concatenated. We continue with the last objective.

### 3. Ask the user if he wants to send the review anonymously

In this last objective we must ask the user if he wants to send his review without indicating his data. Let's imagine that we are logged in to the application and we simply don't want our data to appear when the review is published.

* We edit our script to ask the user whether or not they want to send the review anonymously. As there are only two possible answers, true or false, we are going to use the `confirm()` function to get this `boolean` result from the user.

*./app.js*

    // Objetivo 1 [Datos del hotel]
    var hotel = {
      name: "Mencey",
      location: "Tenerife",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
    };
    
    document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
    document.getElementById("location-hotel").innerHTML =
      "Ubicado en " + hotel.location;
    document.getElementById("img-hotel").src = hotel.img;
    
    // Objetivo 2 [Puntuación del hotel]
    var rating = prompt("Puntuación: del 1 al 5");
    
    document.getElementById("rating").innerHTML = rating + " estrellas";
    
    // Objetivo 3 [Usuario anónimo]
    var anonymous = confirm("¿Quiere que la reseña sea anónima?");
    
    document.getElementById("anonymous").checked = anonymous;

* Check that by selecting OK you are marking the 'checkbox' as selected.

## 3. Optional work

We have two more tasks as optional work. In them we will be able to make use of the access to objects with the `[]` bracketed syntax. Remember that we cannot make use of functions, flow controls, or similar.

### 1. Create two or three hotels and allow the user to review one of them

First, we are going to create a 'hotels' object that will have as properties our hotels (you can include as many hotels as you want, but two is enough to check that it works).

Remember that a variable type `object` could contain other objects as properties. So let's go to it:

* We create our new object `hotels`.

> Remember that we are going to perform objective 1 in another way so you should comment on that code so that it does not cause you conflict.


*./app.jss*

    // var hotel = {
    //   name: "Mencey",
    //   location: "Tenerife",
    //   img:
    //     "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
    // };
    
    // document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
    // document.getElementById("location-hotel").innerHTML =
    //   "Ubicado en " + hotel.location;
    // document.getElementById("img-hotel").src = hotel.img;
    
    var hoteles = {
      Mencey: {
        name: "Mencey",
        location: "Tenerife",
        img:
          "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
      },
      Lani: {
        name: "Lani's Suites Deluxe",
        location: "Lanzarote",
        img:
          "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
      },
    };

Notice that the names of the properties inside the 'hotels' object I have put them with the first letter in capital letters. Simply to make it easier for the user to ask.

* Once the object is created, we are going to modify the dialog box that we showed to the user so that he chooses one of the two hotels. We will save his answer in a variable `selectedHotel`.

*./app.jss*

    var hoteles = {
      Mencey: {
        name: "Mencey",
        location: "Tenerife",
        img:
          "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
      },
      Lani: {
        name: "Lani's Suites Deluxe",
        location: "Lanzarote",
        img:
          "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
      },
    };
    // diff
    var selectedHotel = prompt(
      "Indique hotel sobre el que quiere hacer la reseña: Mencey o Lani",
    );
    // diff

The name that the user must write must coincide with the identifier of our hotels in the object 'hotels'. That is, if my property `Mencey` is entered by the user in lowercase it will not work. Remember that we are only using what we have given. We'll see how to control these errors and other more optimal ways of making this page later on.

* Now that we have the user's selection, let's use it to access the corresponding data and display it on the page.

*./app.jss*

    var hoteles = {
      Mencey: {
        name: "Mencey",
        location: "Tenerife",
        img:
          "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
      },
      Lani: {
        name: "Lani's Suites Deluxe",
        location: "Lanzarote",
        img:
          "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
      },
    };
    
    var selectedHotel = prompt(
      "Indique hotel sobre el que quiere hacer la reseña: Mencey o Lani",
    );
    // diff
    document.getElementById("name-hotel").innerHTML =
      "Hotel " + hoteles[selectedHotel].name;
    
    document.getElementById("location-hotel").innerHTML =
      "Ubicado en " + hoteles[selectedHotel].location;
    
    document.getElementById("img-hotel").src = hoteles[selectedHotel].img;
    // diff

Look at how we are accessing. Remember that with the bracket syntax we can pass a 'string' to access the property. As our variable `selectedHotel` contains as value what the user introduced in the form of `string`, we can use it to access that property.

Once we are in the correct property (that is, in the first level), we can access what it has inside.

    // If you answer previously Lani
    hotels [selectedHotel].name; // Lani

This, underneath, is the same:

    hotels ["Lani"].name; // Lani

And finally, this is equivalent to:

    hotels.Lani.name; // Lani

* Check that the user can enter the expected values and it works. Remember that it must be as you have called the variable.

And now, the last optional task.

### 2. That the score given by the user is showing the typical star rating

Since we cannot use anything that we have not explained in the BootCamp, one way to do it is the following:

* We edit our script with the necessary code. Remember that we must comment the code related to objective 2 so as not to create conflicts.

*./app.js*

 // Objetivo 2 [Puntuación del hotel]
// var rating = prompt("Puntuación: del 1 al 5");

// document.getElementById("rating").innerHTML = rating + " estrellas";

    var stars = {
      una:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
      dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
      tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
      cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
      cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
    };

Notice that I have created a `stars` object where it has 5 properties. Each property has 5 `span` tags with the corresponding HTML symbol. The `&amp;#9733;` is for the full star and the `&amp;#9734;` for the empty star.

* Now let's ask the user the number of stars they want to give the hotel. We will save this data in a variable to be able to use it later.

*./app.js*

        var stars = {
      una:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
      dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
      tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
      cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
      cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
    };

    // diff
    var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");

* And finally, using the syntax of brackets, we will assign the corresponding property in the HTML.

*./app.js*

    var stars = {
      una:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
      dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
      tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
      cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
      cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
    };

    var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
    // diff
    document.getElementById("rating").innerHTML = stars[rating];

* We updated the style to give it some color.

*./site.css *

    body {
      font-family: Arial, Helvetica, sans-serif;
    }
    
    .row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -16px;
    }
    
    .container {
      background-color: #f2f2f2;
      padding: 5px 20px 15px 20px;
      border: 1px solid lightgrey;
      border-radius: 3px;
    }
    
    .col-50 {
      flex: 50%;
      padding: 16px;
      box-sizing: border-box;
    }
    
    .image {
      height: 200px;
      width: 400px;
    }
    /** diff */
    .stars span {
      color: chocolate;
      font-size: 20px;
    }

And that's how we ended up. What did you think? Did you do it differently?
