//procedure for loading the
//express module
var express = require("express");
var app = express();


//the fucntion below is
//a call back function
//listening for a GET request to localhost:3000/
app.get("/", function(request, response){

  //when that happens we're going to respond
  // by sending the text
  //"hello world"
  response.send("Hello World!");
});


//make a route for a GET/ person
//when that route is reached
//repond, by sending the text "Hello Person!"
app.get("/elloperson", function(request, response){
  response.send("Hello Person!");
});

//make another route to
//GET /anotherperons
//which responds with the text "Hello Another Person!"
//params get it from the url perameter, look for colon :

app.get("/person/:name", function(request, response){
  var inputName = request.params.name;
  response.send("Hello" + inputName);
});

//a GEt route for /add/:num1/:num2
//respond by sending the sum of num1 and num2
//request is an object that gives us a number express
app.get("/add/:num1/:num2", function(request, response){
  // + convert to a number
  //params is sub object for params
  var num1 = +request.params.num1;
  var num2 = +request.params.num2;
  var total = num1 + num2;
  //converts back to string for display
  var sum = total.toString();
  response.send(sum);
});


//a GEt route for /subtract/:num1/:num2
app.get("/subtract/:num1/:num2", function(request, response){
  var num1 = +request.params.num1;
  var num2 = +request.params.num2;
  var total = num1 - num2;
  //converts back to string for display
  var subtract = total.toString();
  response.send(subtract);
});

//a GEt route for /multiply/:num1/:num2
app.get("/multiply/:num1/:num2", function(request, response){
  var num1 = +request.params.num1;
  var num2 = +request.params.num2;
  var total = num1 * num2;
  //converts back to string for display
  var mult = total.toString();
  response.send(mult);
});
//a GEt route for /divide/:num1/:num2
app.get("/divide/:num1/:num2", function(request, response){
  var num1 = +request.params.num1;
  var num2 = +request.params.num2;
  var total = num1 / num2;
  //converts back to string for display
  var div = total.toString();
  response.send(div);
});

app.get("/math/:operator/:num1/:num2", function(request, response){
  var num1 = +request.params.num1;
  var num2 = +request.params.num2;
  var operations = {
    add: num1 + num2,
    subtract: num1 - num2;
    multiply: num1 * num2;
    divide: num1 / num2;
    power: num1 ** num2
  };
  //converts back to string for display
  var total = operations[request.params.operation];
  var stringResponse = total.toString();
  response.send(stringResponse);
});

//listen accepts a PORT
//you give it a number
//so the server knows what it is listening to
//will get server up and runningc
app.listen(3000, function(){
  console.log("Server just started!");
});
