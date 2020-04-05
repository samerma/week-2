//===================================================================================
//Section 1
//===================================================================================
/*const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}


console.log("Damn, you see this gal? She ran " + distance + " miles")

// Answer : the first log should work and print "Finished running 8 miles" but the second log gives error because distance is only defined in the if scope

//===================================================================================
// Section 2
//===================================================================================
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}

//Answer: similar to section 1 cowSound is only defined in the if scope so the log gives an error, undefined

//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)

//Answer : code works properly , all variables are used in there correct scope

//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()

//Answer : seed in a local variable in the getSeed() function so it cannot be accessed in the scope of plant() function so we get a undefined error

//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

//Answer: found is declared localy in the if(u.name == name) scope so it connot be accesed outside of it and that causes an undefined variable error
        // users array is in the function scope and works properly, the same with name
*/
//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
let isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}

// Answer : code works properly, all relevant variables are used in their correct scope
    // isEnough is global so we can use it in the loop and if scopes