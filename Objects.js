var person = {
    firstname: "Jimmy",
    lastname: "Fallon",
    sayHello: function () { }
};
console.log(person.firstname);
person.sayHello = function () {
    console.log("Hello. My name is " + person.firstname);
};
person.sayHello();
