
# Module 6 - Algorithms III - Laboratory

### UTILITIES

Before starting with the exercises, a small explanation. In the code of these exercises you will find the following:

Create an empty array of length n:

    var myEmptyArray = new Array(3); // 3-position empty array.
    console.log(myEmptyArray); // [empty × 3]

Fill all the positions of an array with the same value:

    var myArray = new Array(3); // 3-position empty array.
    myArray.fill("Hello");
    console.log(myArray); // ["Hello", "Hello", "Hello"]

In one line it would be equivalent to:

    var myArray = new Array(3).fill("Hello");
    console.log(myArray); // ["Hello", "Hello", "Hello"]

## Agenda

We are going to implement an agenda for a team of people, so that they can tell us which hours they have free and which hours they are busy. In addition, we will generate an algorithm that makes a search in a team and determines what is the first hour that all team members are free, so we can establish a meeting. That is, it looks for the first available slot in their agendas.

### Interface

For this example we will use the console so we will not need a graphical interface.

### Data

We propose that you start from the following data structures:

    // Constants
    var WORK_HOURS = [
      "08:00 - 09:00",
      "09:00 - 10:00",
      "10:00 - 11:00",
      "11:00 - 12:00",
      "12:00 - 13:00",
      "13:00 - 14:00",
      "15:00 - 16:00",
      "16:00 - 17:00"
    ];
    
    // Data
    var myTeam = [
      {
        name: "Maria",
        availability: new Array(8).fill(true)
      },
      {
        name: "Pedro",
        availability: new Array(8).fill(true)
      },
      {
        name: "Esther",
        availability: new Array(8).fill(true)
      },
      {
        name: "Marcos",
        availability: new Array(8).fill(true)
      },
    ];

**`WORK_HOURS`**

As you can see, `WORK_HOURS` is an array that represents the possible time slots of each team member. In total there are 8 (8 working hours) and if you look at it, the 14h to 15h slot has been excluded because it is reserved for lunch. This array of working hours could be used to show each of the time slots of each team member and whether it is free or not.

**`myTeam`**

The team will be represented by an array of members called `myTeam`. This array contains objects that represent each member, and that have 2 properties:


- The name of the member (property `name`).
- The availability of that person (property `availability`).


The availability of each member (`availability`) has been modeled as an array of 8 positions (8 slots in total) that by default has been initialized to `true` for all slots. That is, initially, all members are available every hour.

### Algorithm

Let's divide it into 2 sections:

#### 1. Random generation of availability

As a first step, we will randomly generate the availability for all team members. The idea is to go through all the team members, and in turn, for each member, all the time slots of their availability, and randomly assigning if it is available or not in that slot.

In this way we generate a team with a completely random agenda.

**Suggestion

Once you have generated your random agenda, display it by console. An example of console output might be this:

    Maria's availability
        08:00 - 09:00: Yes
        09:00 - 10:00: Yes
        10:00 - 11:00: Yes
        11:00 - 12:00: Yes
        12:00 - 13:00: No
        13:00 - 14:00: No
        15:00 - 16:00: Yes
        16:00 - 17:00: Yes
    Pedro's Availability
        08:00 - 09:00: No
        09:00 - 10:00: No
        10:00 - 11:00: Yes
        11:00 - 12:00: No
        12:00 - 13:00: Yes
        13:00 - 14:00: Yes
        15:00 - 16:00: Yes
        16:00 - 17:00: Yes
    Esther's Availability
        08:00 - 09:00: Yes
        09:00 - 10:00: No
        10:00 - 11:00: Yes
        11:00 - 12:00: Yes
        12:00 - 13:00: No
        13:00 - 14:00: No
        15:00 - 16:00: Yes
        16:00 - 17:00: Yes
    Frame Availability
        08:00 - 09:00: Yes
        09:00 - 10:00: No
        10:00 - 11:00: No
        11:00 - 12:00: Yes
        12:00 - 13:00: Yes
        13:00 - 14:00: No
        15:00 - 16:00: Yes
        16:00 - 17:00: No

#### 2. Search for free space

To find the first free slot you will have to check the first time slot where all team members are available.

**Suggestion

It shows by console the time slot found where there is a gap, if any, and in case there is no gap, report it as well. For example:

    // Example of available slot
    Time slot found at 15:00 - 16:00
    
    // Example of a non-existent gap
    Sorry. There is no space available in the equipment.


## Optimal change calculator for bills and coins

We will implement an optimal exchange rate calculator based on a purchase amount and the amount delivered by the customer.

### Interface

We must allow the user to enter an amount with the total amount of the purchase and an amount with the money given to us.


- Numerical input for the total amount.
- Numerical input for the amount that is delivered.
- Calculate button.


When you press the calculate button, an algorithm must process the necessary calculations to return a result with the number of bills and coins needed to make the return.

### Algorithm

Inside our store, we can give change for 5, 10, 20, 50, 100 and 200 euro bills (we will not give change for 500 euro).
We will also have coins of 1, 2, 5, 10, 20 and 50 cents; and 1 and 2 euros.

Let's think how we would do if we were in charge of the cash desk in our store. If the amount of the purchase was 152 euros and the customer paid us with a 200 euro bill, what should we do?


- First we calculate the difference to know how much we should return: '48 euros'.
- Then we would try to give change with 200 euro bills: 'amount returned / 200 = 0.24'.
- We see that we can NOT give change with 200 euro bills (whole part of 0.24 equals 0).
- We try with the following bill, 100 euros: 'amount returned / 100 = 0.48'.
- We see that we can NOT give 100 euro bills (whole part of 0.48 equals 0).
- We keep trying with the rest of the bills, repeating the steps until we find the correct one, 20 euros.
- We calculate the change with 20 euro bills: 'amount returned / 20 = 2.4'.
- We see that we can give 2 tickets of 20 euros, so we subtract it from the amount of the return `return amount = return amount - 2 * 20`.
- We have an updated amount of 8 euros.
- We repeat the steps with the rest of the bills and coins.


At the end of the algorithm we must keep the amount of bills and coins of each type that we must return:


- 2 bills of 20 euros.
- 1 bill of 5 euros.
- 1 coin of 2 euros.
- 1 coin of 1 euro.


### Challenge
Let's complicate our problem. Now we must do the calculation according to the bills and coins that we have in our box.

To do this we will need to somehow indicate what amount of bills and / or currency we have available.