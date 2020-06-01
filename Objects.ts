var person = { 
    firstname:"Jimmy", 
    lastname:"Fallon" ,
    sayHello: function() { }
};

console.log(person.firstname)
person.sayHello = function() {
    console.log("Hello. My name is " + person.firstname)
}
person.sayHello();

var invokeperson = function(obj: {firstname:string, lastname:string}) {
    console.log("First name: " + obj.firstname)
    console.log("Last name: " + obj.lastname)
}

invokeperson(person);
invokeperson({firstname: "Will", lastname: "Smith"});

interface CoordPoint {
    x:number
    y:number
}

var addPoints = function(p1:CoordPoint, p2:CoordPoint):CoordPoint {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return {x:x, y:y};
}

console.log(addPoints({x:5,y:2},{x:2,y:2}))
