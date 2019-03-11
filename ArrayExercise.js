//Information
const inventors = [
    'Albert Einstein',
    'Issac Newton',
    'Galileo Galilei',
    'Marie Curie',
    'Johannes Kepler',
    'Nicolaus Copernicus',
    'Max Planck',
    'Katherine Blodgett',
    'Ada Lovelace',
    'Sarah E. Goode',
    'Lise Meitner',
    'Hanna Hammarstrom'
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//FILTER
console.log(inventors.filter(name => name.startsWith("A")));

//Print out an array of the inventors whose name contains 'n'.
// // Option 1:
// function arrayResult() {
//     for (let i = 0; i < inventors.length; i++) {
//         if ((inventors[i]).search("n") > -1) {
//             array.push(inventors[i]);
//         }
//     }
// }
// arrayResult();
// console.log(arrayResult);

// // Option 2:
let resultArr = inventors.filter(function(item){
    return item.search("n") > -1;
});
console.log(resultArr);

// Bonus: print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
console.log(inventors.filter(function(name, index) {
    for (let i = 0; i < name.split().length; i++) {
        if ((name.split())[i] === (name.split())[i+1]) {
            return true;
        }
        else {return false}
    }
}))

// Print out an array of the numbers which are odd.
console.log(numbers.filter(function (item) {
    return item % 2 == 1;
}))

// Print out an array of the numbers that have two digits.
console.log(numbers.filter(function (item) {
    return item >= 10;
}))

//FILTER
//Print out an array of all the inventors' names in uppercase.
console.log(inventors.map(function (item, index) {
    return item.toUpperCase();
}))

// Print out an array of all the first names of each inventor.
console.log(inventors.map(function (item, index) {
    return item.split(" ", 1);
}))

// Print out an array of the length of every name.
console.log(inventors.map(item => item.length))

//  Print out an array of every number multiplied by 100.
console.log(numbers.map(item => item * 100))

// Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).
console.log(numbers.map(item => Math.pow(item, 2)))

// SORT
// Sort all the inventors in alphabetical order, A-Z.
console.log(inventors.sort())

// Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
console.log(inventors.sort(function (a, b) {
    if (a < b) {
        return 1
    }
    if (a == b) {
        return 0
    }
    if (a > b) {
        return -1
    }
}))

// Sort all the inventors by length of name, longest name first. Do not use the reverse method.
console.log(inventors.sort(function (a, b) {
    if (a.length < b.length) {
        return 1
    }
    if (a.length == b.length) {
        return 0
    }
    if (a.length > b.length) {
        return -1
    }
}))

// Sort the numbers until you see the following: [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9].
console.log(numbers.sort())

// REDUCE
// Find the sum of all the numbers.
console.log(numbers.reduce(function(total, num) {
    return total + num;
}))

// Find the sum of all the even numbers.
console.log(numbers.reduce(function(sum, num) {
    if (num %2==0) {
        return sum + num;
    }
    else {return sum}
}, 0))

//Create a string that has the first name of every inventor.
console.log(inventors.reduce(function(initialValue, name) {
    return initialValue + name.split(" ",1);
}, "")) 

// SOME/ EVERY
// Does any inventor have the letter 'y' in their name?
console.log(inventors.some(function(ifTrue, index) {
    return inventors.includes("y");
}))

// Does every inventor have the letter 'e' in their name?
console.log(inventors.every(function(ifTrue, index) {
    return inventors.includes("e");
}))

// Does every inventor have first name that's longer than 4 characters?
console.log(inventors.every(function(ifTrue, index) {
    return name.split(" ",1).length >4;
}))

// Find / FindIndex
// Find the inventor that has a middle name.
console.log(inventors.find(function(name, index) {
    return name.split(" ", 3).length == 3;
}))

// Bonus: Return a new array without inventor with a middle name.
console.log(inventors.filter(function(name, index) {
    return name.split(" ", 3).length <= 2;
})) 