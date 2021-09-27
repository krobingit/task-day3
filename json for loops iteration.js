var person = { "name": "robin", "age": "24", "location": "India" }

for (var key in person) {                  //using for loop
    console.log(key + ": " + person[key])
}

var keys = Object.keys(person)  //generating keys array for JSON



for (let key of keys) {                    //using for of loop
    console.log(key + ": " + person[key])
}

keys.forEach(key => console.log(key + ": " + person[key]))    //using for each loop

for (var i = 0; i < keys.length; i++)
    console.log(keys[i] + ": " + person[keys[i]])               //using for loop

//successfully iterated through all loops.

//json objects enclosed in array
var json = [{
    "id": "1",
    "msg": "hi",
    "time": "2021-05-05 23:35",
    "fromWho": "hello1@gmail.com"
},
{
    "id": "2",
    "msg": "there",
    "time": "2021-05-05 23:45",
    "fromWho": "hello2@gmail.com"
}];
//for
for (var i = 0; i < json.length; i++) {
    console.log(json[i]);
}
//forEach
json.forEach(obj => console.log(obj))

//for in
for (var ind in json)
    console.log(json[ind])

//for of
for (var val of json)
    console.log(val)    