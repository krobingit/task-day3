var person = { "name": "robin", "age": "24", "location": "India" }

for (var key in person) {                  //using for loop
    console.log(key, person[key])
}

var keys = Object.keys(person)



for (let key of keys) {                    //using for of loop
    console.log(key, person[key])
}

keys.forEach(key => console.log(key, person[key]))    //using for each loop

for (var i = 0; i < keys.length; i++)
    console.log(keys[i], person[keys[i]])               //using for loop

//successfully iterated through all loops.
