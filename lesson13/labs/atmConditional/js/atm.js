/*

This is a banking application. This program will update your balance with your deposits and withdrawls.

-	Create 3 variables: balance, transaction, and amount.
-	The starting account balance is 1000$.
-	Ask for their transaction type (deposit, withdrawl).
-	Ask for the amount to withdraw or deposit.
-	Depending on their transaction choice either add or substract the balance. 
-	Print the new balance to the console.
*/

var balance = 1000;
var transaction;
var amount;




// do {

// transaction = prompt('(d)eposit, (w)ithdrawal, (q)uit');

// if (transaction == 'd') {
//  amount = parseInt(prompt('how much?'));
//  balance = balance + amount;
// console.log('your balance is $' + balance)
// } else if (transaction == 'w') {
//  amount = parseInt(prompt('how much?'));
//  balance = balance - amount;
// console.log('your balance is $' + balance)
// } else if (transaction =='q') {
//  console.log('clean up on eisle 3')
//  console.log('your balance is $' + balance)
// } else {
// 	console.log('error')
// }
// } while (transaction != 'q')



for (null; transaction != 'q'; null) {
transaction = prompt('(d)eposit, (w)ithdrawal, (q)uit');
	
if (transaction == 'd') {
 amount = parseInt(prompt('how much?'));
 balance = balance + amount;
console.log('your balance is $' + balance)
} else if (transaction == 'w') {
 amount = parseInt(prompt('how much?'));
 balance = balance - amount;
console.log('your balance is $' + balance)
} else if (transaction =='q') {
 console.log('clean up on eisle 3')
 console.log('your balance is $' + balance)
} else {
	console.log('error')
}

}