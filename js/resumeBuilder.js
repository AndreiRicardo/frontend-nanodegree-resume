/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* $("#main").append("Andrei Ricardo Rodrigues");
var firstname = "andrei";
var age = 35;
console.log(firstname); */
/* var awesomeThougs = "I am andrei and I am AWESOME !";
$("#main").append(awesomeThougs);
console.log(awesomeThougs); */

/*  usando replace  */
/* var email = "andreiricardorodrigues@email.com";
var newemail = email.replace("email","gmail");
console.log("email errado\n ",email,"\n email correto \n", newemail);
$("#main").append("email errado\n <br>",email,"<br>\n email correto \n<br>", newemail); */

/* var sTring = "Sou o Andrei e me sinto fantastico!";
var newsTring = sTring.replace("fantastico","engracado");
console.log("primeiro texto\n",sTring,"\n Segundo texto\n",newsTring);
$("#main").append("primeiro texto\n<br>",sTring,"<br>\n Segundo texto\n<br>",newsTring); */

/* var formatarnome = HTMLheaderName.replace("%data%", "Andrei Ricardo Rodrigues");
$("#header").append(formatarnome); */

/* 
quiz 6
var s = "audacity";

var udacityizer = function(s) {  
// Right now, the variable s === "audacity"
// Manipulate s to make it equal to "Udacity"
// Your code goes here!
var s = s.replace("audacity","Udacity");


return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s)); */

/* var skills =[
    "awesome", "programing", "teaching", "JS"
];
$("#main").append(skills.length); */

//essas linhas estão no mdn 

//////Create an Array

var fruits = ['Apple', 'Banana'];

//console.log(fruits.length);
// 2

//////Access (index into) an Array item

 //var first = fruits[0];
// Apple

//var last = fruits[fruits.length - 1];
// Banana

//////Loop over an Array

//fruits.forEach(function(item, index, array) {
  //console.log(item, "= \t", index);
//});
// Apple 0
// Banana 1

//////Add to the end of an Array
//var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

//////Remove from the end of an Array

//var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];

//////Remove from the front of an Array

//var first = fruits.shift(); // remove Apple from the front
// ["Banana"];

//////Add to the front of an Array

///var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];

//////Find the index of an item in the Array

//fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

//var pos = fruits.indexOf('Banana');
// 1

//////Remove an item by index position

//var removedItem = fruits.splice(pos, 1); // this is how to remove an item
                                        
// ["Strawberry", "Mango"]

//////Remove items from an index position

//var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
//console.log(vegetables); 
// ["Cabbage", "Turnip", "Radish", "Carrot"]

//var pos = 1, n = 2;

//var removedItems = vegetables.splice(pos, n); 
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

//console.log(vegetables); 
// ["Cabbage", "Carrot"] (the original array is changed)

//console.log(removedItems); 
// ["Turnip", "Radish"]

//////Copy an Array

//var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry"] 

//saidas globais
/* fruits.forEach(function(item, index, array) {
  console.log(item,"=\t ", index);
}); */


/* 
////ele diz que não quer isso mas funciona
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    
   

    newArray = sampleArray;
    //newArray.slice(sampleArray);
    sampleArray.length = newArray.push(3,2,1);
     
   

    
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

 */

/* 
 ////ele diz que quer isso

 var sampleArray = [0,0,7];// carrenagdo uma array

 function incrementLastArrayElement(_array)  {// usando _array para passar sampleArray
    var newArray = []; // carregando uma array vazia
    newArray = _array.slice(0); // copiando sampleArray para dentro da newArray
    var lastNumber = newArray.pop(); // removendo o ultimo item da lista
    newArray.push(lastNumber + 1); // pegando o ultimo item que estava sendo removido e adiciona mais no valor
    return newArray; // devolve a lista
}

console.log(incrementLastArrayElement(sampleArray));// trazendo a função para o console. _array = sampleArray
 */