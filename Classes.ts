class Car { 

    engine:string; 

    constructor(engine:string) { 
       this.engine = engine 
    }  
 
    disp():void { 
       console.log("Engine is  :   "+this.engine) 
    } 
 }

 class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
 
 class Circle extends Shape { 
    disp():void { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 }

var carObj = new Car("XXSY1");

console.log("Reading attribute value Engine as :  " + carObj.engine);

carObj.disp();

var circleObj = new Circle(223); 
circleObj.disp()