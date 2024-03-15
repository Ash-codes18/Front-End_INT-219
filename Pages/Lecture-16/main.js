var s = {
    "name" : "Rajveer",
    "age" : 21,
    "married" : true,
    "kids" : 0,
    "hobbies" : ["music","sport"],
    "vehicle" :[
        {"type":"car", "vname" : "swift"},
        {"type": "bike", "vname" : "pulsar"}
    ]
};

console.log(s.name);
console.log(s.hobbies[0]);
console.log(s.kids);
console.log(s.married);
console.log(s.hobbies);
console.log(`The age of the person is: ${s.age}`);
console.log(s.vehicle);
for(let i=0;i<s.vehicle.length;i++){
    console.log(s.vehicle[i].type +": "+ s.vehicle[i].vname);
}
s.hobbies[0] = "dance";
console.log("hobby music changed to: "+s.hobbies[0]);

/*

create a json object that consist of the nested objects, 
then you have to add keys like class, rollno, address, subjects
and you have to access that json ojbect with the help of stringify  and parse methods.
*/


var obj = {
    "name" : "Suman",
    "class" : "10th",
    "rollno" : 45,
    "subjects" : ["Maths","Science","SST","English"],
    "address" : "Kanpur"
}

var str= JSON.stringify(obj);
console.log(`converting the json object to string: ${str}`);

var parseObj = JSON.parse(str);
console.log(`string to object parse: `+parseObj);
