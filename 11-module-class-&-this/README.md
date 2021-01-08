# Module 11 - Classes and This - Laboratory

Let's imagine we have a hotel reservation website. When a client makes a reservation, he or she indicates the following information:

Which rooms they want (there are several types).
For each room, how many people will occupy it.
In addition, we must know that the VAT rate applied to hotel rooms is 21%.

An example of our hotel data would be the following:

    const reservations = [
        {
            typeRoom: "standard",
            pax: 1,
            nights: 3
        },
        {
            typeRoom: "standard",
            pax: 1,
            nights: 4
        },
        {
            typeRoom: "suite",
            pax: 2,
            nights: 1
        }
    ];

Our aim is to calculate the subtotal (price without VAT) and the total of the reservations made by a client.

## Case 1
In the case of a private client:

Room / day (VAT not included):
Standard: 100
Suite: 150 euros.
Additional charges:
For each additional person add 40 ? to the price of each night.
VAT add 21% to the total.
Create a class that receives the reservation list and calculate the subtotal and total taking into account the above requirements.

## Case 2
We cover the case of a tour operator, when booking large volumes, we give you the following special conditions:

All rooms have the same price (100 euros).
Additionally, a 15% discount is applied to the contracted services.
Create a class that inherits from the first one that covers the case of the calculation of totals and subtotals for the tour operator.

## Challenge
Create a base class with the common functionality, and two daughter classes one with the case for private client and one for tour operator.

In the base class builder, enter the room price list, what will you have to do so that in the child you can initialize the class?

Some hints:

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/super

Additional exercise
We add a field to each reservation in which we indicate whether breakfast is included or not: if it is included there is an additional charge of 15 euros per person per night.

Calculate totals and subtotals for both private and tour operator rates.

A sample of data to work with:

    const reservations = [
        {
            typeRoom: "standard",
            breakfast: false,
            pax: 1,
            nights: 3
        },
        {
            typeRoom: "standard",
            breakfast: false,
            pax: 1,
            nights: 4
        },
        {
            typeRoom: "suite",
            breakfast: true,
            pax: 2,
            nights: 1
        }
    ];