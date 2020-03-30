function disp_details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }
 disp_details(123,"John");
 disp_details(111,"mary","mary@xyz.com");

 function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)

 function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("Discount Amount: ",discount); 
 } 
 calculate_discount(1000) 
 calculate_discount(1000,0.30)

 var msg = function() { 
    return "hello world";  
 } 
 console.log(msg())

var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);

function factorial(number) {
    if (number <= 0) {         
       return 1; 
    } else {     
       return (number * factorial(number - 1));     
    } 
 }; 
 console.log(factorial(6));

 (function () { 
    var x = "Hello!!";   
    console.log(x)     
 })() 

 var foo = (x:number)=>10 + x 
console.log(foo(100)) 

var foo2 = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
 } 
 foo2(100)

 var func = (x)=> { 
    if(typeof x=="number") { 
       console.log(x+" is numeric") 
    } else if(typeof x=="string") { 
       console.log(x+" is a string") 
    }  
 } 
 func(12) 
 func("Tom")