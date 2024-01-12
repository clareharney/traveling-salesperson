// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [ 12, 16, 45, 23, 98, 26, 12, 15, 26 ]

// Declare a variable to store the total. Initial value is 0.
let totalMiles = 0
/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const miles of weeklyMiles) {
    totalMiles += miles

}

// Declare a new variable to store the average miles over time
const averageMiles = totalMiles / weeklyMiles.length
// Output the average miles and the total miles to the console
console.log(`On average, I drive ${averageMiles} miles each week.
In total, I have driven ${totalMiles} miles.`)