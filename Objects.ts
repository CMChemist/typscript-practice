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
