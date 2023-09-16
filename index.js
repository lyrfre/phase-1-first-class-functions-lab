// Code your solution in this file!
// returnFirstTwoDrivers()
//       1) should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}


// returnLastTwoDrivers()
//       2) should return an array of the last two drivers
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}
// selectingDrivers]
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//       3) has the `returnFirstTwoDrivers` function to as its first element
//       4) has the `returnLastTwoDrivers` function to as its last element
//       5) allows us to invoke either function from the array
//     createFareMultiplier()
//       6) returns a function
//       7) should multiply a given value using the created multiplier
const createFareMultiplier = function(multiplyNumber){
    return function (number){
        return (multiplyNumber * number)
    }
}
//     fareDoubler()
//       8) is a function
//       9) doubles fares

function fareDoubler(fare) {
    return fare * 2
}
//     fareTripler()
//       10) is a function
//       11) triples fares
function fareTripler(fare){
    return fare * 3
}
//     selectDifferentDrivers(arrayOfDrivers, function)
//       12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//       13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument
function selectDifferentDrivers(arrayOfDrivers, callback){
    return callback(arrayOfDrivers)
}
console.log(selectDifferentDrivers([1,2,3,4], returnFirstTwoDrivers))
console.log(selectDifferentDrivers([1,2,3,4,], returnLastTwoDrivers));
