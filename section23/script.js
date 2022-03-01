// ****** DEFAULT PARAMS *******

//old way
function rollDie(numSides) {
   if(numSides === undefined) {
       numSides = 6
   }
   return Math.floor(Math.random() * numSides) + 1
}

// new way
function rollDieNew(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
 }

 //another example in which we learn that default params come last
function greet(person, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${person}${punc}`)
}

greet("Lauren", "Hello")


// ****** SPREAD ******

// takes an iterable (e.g. arrays, strings) and puts all the data into separate variables
// eg these accept separate variables but not an array:
Math.max(13, 4, 5, 6, 13235, 42632, 3432, 0)
Math.min(3, 284, 69333)

const nums = [13, 4, 5, 6, 13235, 42632, 3432, 0]
//fails :(((
Math.max(nums)

// so we use "..." to create a 'spread' of variables from the array!
console.log(Math.max(...nums))
console.log(Math.min(...nums))

// another example- look at the diffence between console logging an array and a spread of the array
console.log(nums)
console.log(...nums)

//Anything we can iterate over with for-of can be spread, like strings:
console.log("Hello")
console.log(..."Hello")
// This is spreading into functions

// Regarding array literals...
// We can spread iterables into arrays!
const cats = ["Deana", "Mylo", "Luna"]
const dogs = ["Dally", "Kira"]

const allPets = [...dogs, ...cats, "Murphy"]
console.log(...allPets)

// Now, spread in object literals!
const feline = {legs: 4, family: "Felidae"}
const canine = {isFurry: true, family: "Caninae"}

// family will revert to last value
const catDog = {...canine, ...feline}
//note that a ... would not work here
console.log(catDog)

// and we can do
console.log({...feline, colour: "Black"})

//another useful example
const dataFromForm = {
    email: 'lauren.ffen@gmail.com',
    password: '12345',
    username: 'lffen'
}

//want to add extra variables, so make a copy using spread and add them in
const newUser = {...dataFromForm, id: 2345, isAdmin: false}
console.log(newUser)



/// ******* REST PARAMS *******

// magical array-like object! Automatically collects all objects. Cannot use array methods though.
function sum() {
    console.log(arguments)

    /* this does not work bc you cannot use array methods!
    return arguments.reduce((total, el) => total + el)
    */
}

sum()
sum(1, 2, 3, 4, 5, 6, 7, 8, 9)
sum("Hello")

//using ... means I can customize at will as an array IS being passed in now!
function sumNew(...nums) {
    //console.log(nums)
    // Now we CAN use this array method, heck yeah!
    if (nums.length != 0){
        return nums.reduce((total, el) => total + el)
    }
    // I put in a lil check for no args :)
    else return 0
}

console.log(sumNew(4, 5, 6))
console.log(sumNew())

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse} `)
}

raceResults("Dally", "Kira", "Mylo", "Luna", "Deana")

//also note arguments does not work in arrow functions!


// ***** DESTRUCTURING ARRAYS ******
const scores = [8763285, 8235238, 3803833, 3259039, 2829549] 

// we could do...
const highScore = scores[0]
const secondHighScore = scores[1]

//but there is another way!
const [gold, silver, bronze, ...remainder] = scores
console.log(gold)
console.log(remainder)


// ***** DESTRUCTURING OBJECTS ******
// more commonly used as not about order

const user = {
    email: 'loz@loz.com',
    password: '12345luggagecombo',
    firstName: 'Loz',
    lastName: 'Ffen',
    born: 1982,
    bio: 'Loz Ffen is a chaotic good half elf programmancer in training and Queen of the Nerds.',
    city: 'Melbourne',
    state: 'VIC'
}

const user2 = {
    email: 'nigel@nigel.com',
    firstName: 'Nigel',
    lastName: 'Legin',
    born: 1971,
    city: 'Melbourne',
    state: 'VIC'
}

// need to single each out individually...
//const firstName = user.firstName
//const lastName = user.lastName
//const email = user.email

//const { email } = user
//console.log(email)

// singles these all out and creates variables for them
//const { firstName, lastName, password} = user
//console.log(firstName, lastName, password)

// to rename keys eg. born to birthYear
//const { born: birthYear } = user
//console.log(birthYear)

//user2 has different elements
//const { city, state, bio } = user2
// bio is not defined
//console.log (city, state, bio)
// we can set a default value
//const { city, state, bio = 'N/A' } = user2
//console.log(city, state, bio)
// If we did the same for first user, the bio in the object would be used instead of the default


// ****** DESTRUCTURING PARAMS ********
// most frequently used with objects

// instead of this
/*
function fullName(user) {
    return `${user.firstName} ${user.lastName}`
}
console.log(fullName(user))
*/
// we can destructure the params
/*
function fullName(user) {
    const {firstName, lastName} = user
    return `${firstName} ${lastName}`
}
console.log(fullName(user))*/

// But if we only want a few particular bits, can destructure on the way into function
function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}
console.log(fullName(user))
// and we could use default values here too eg
// function fullName({firstName, lastName = "FFFFFFFEN"})

const movies = [ 
    {
        title: 'Spaceballs',
        score: 99,
        year: 1982
    },
    {
        title: 'Robin Hood Men in Tights',
        score: 90,
        year: 1995
    },
    {
        title: 'Sharknado',
        score: 40,
        year: 2012
    },
    {
        title: 'Clueless',
        score: 80,
        year: 1995
    }
]
//used with array methods
//eg we want to filter movies based on score
console.log(movies.filter((movie) => movie.score >= 90))

//another option is to destructure score immediately!
console.log(movies.filter(({score}) => score >= 90))

// for more stuff...
/*movies.map(movie => {
    return`${movie.title} (${movie.year}) is rated ${movie.score}.`
})*/

//instead can use
console.log(movies.map(({ title, year, score }) => {
    return`${title} (${year}) is rated ${score}.`
}))
