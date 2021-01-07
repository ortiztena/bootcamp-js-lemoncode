var stars = {
    one:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    two:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    three:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    four:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    five:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };

var rating = prompt("Rating: one, two, three, four or five starts");

document.getElementById("rating").innerHTML = stars[rating];

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

var selectedHotel = prompt( "Click on the hotel you want to rate: Mencey or Lani", );

document.getElementById("name-hotel").innerHTML =
  "Hotel " + hoteles[selectedHotel].name;

document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hoteles[selectedHotel].location;

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var anonymous = confirm("Do you want an anonymous rate?");

document.getElementById("anonymous").checked = anonymous;