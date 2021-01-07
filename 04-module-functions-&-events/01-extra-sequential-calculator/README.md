## Sequential Calculator

Repeat the calculator exercise, but this time, let's do a sequential calculator:

Only one numeric field is needed.
Keep the 4 buttons of the 4 operations.
Add an equal or result button ("=" ).
A sequential calculator works as follows:

The user enters a first number.

Click on an operation.

Then enter a second number.

Click another operation again.

And so on... until you press the result button.

If you look, the key to this algorithm is to go accumulating the partial result. To do this, with every click that the user makes on an operation, you must:

Extract the operand in the input.
Update the partial result, which will apply the previous operation saved, using as operands the partial result and the new operand.
Save the current operation for the next time.

**NOTE**: Most of the functions we saw in the basic calculator could serve you here too.
