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

//var fruits = ['Apple', 'Banana'];

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


/*  //// isso foi o que eu fiz nao deu certo logico
 var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    var firstName;
    var lastName;
    // Your code goes here!
    
    finalName = name.toLowerCase('AlbERt EINstEiN');
    //firstName = name.toLocaleUpperCase('AlbERt',0);
    //lastName = name.toUpperCase('EINstEiN');

    //finalName = firstName + " " + lastName;
    firstName = finalName.toUpperCase();
    
    // Don't delete this line!
    finalName = firstName;
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name)); */

/* como ele queria 
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
console.log(nameChanger(name)); */


////resposta

/* var names = oldName.split(" ");


Aqui, estamos criando um array de nomes analisando o nome original no espaço. 
Nesse ponto, para nosso exemplo original, names === ["AlbERt", "EINstEiN"]

names[1] = names[1].toUpperCase();

O método string.toUpperCase() faz exatamente o que seu nome descreve. 
Ele atua em names[1], que é "EINstEiN" no exemplo original. Então aqui estamos 
reatribuindo o segundo elemento no array names à versão em maiúsculas de "EINSTEIN".
names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();

Essa linha cria Albert. names[0].slice(0,1).toUpperCase() começa atuando no 
primeiro elemento no array names, que é "AlbERt" no exemplo. Em seguida, pegamos 
apenas a primeira letra usando .slice(0,1). Em seguida, usamos o método .toUpperCase() 
novamente para assegurar que a primeira letra seja capitalizada. Além disso, 
observe como encadeamos dois métodos aqui.

A parte seguinte, names[0].slice(1).toLowerCase(), atua de modo semelhante, 
a não ser porque dessa vez estamos usando .slice(1) para pegar o restante da primeira string, 
que é "lbERt" no exemplo. Em seguida, simplesmente encadeamos o método .toLowerCase() 
para assegurar que as outras letras no primeiro nome estejam em minúsculas. Depois que a 
primeira letra estiver maiúscula e as outras letras do nome estiverem minúsculas, nós as concatenamos junto com o +.
finalName = names.join(" ");

array.join([chars]) nos permite reunir elementos do array em uma única string. Cada elemento 
será separado pelo chars opcional. Nesse caso, queremos um espaço entre os dois nomes, por isso 
fizemos de chars um único espaço, " ". Com isso, reunimos "Albert" e "Einstein" para formar "Albert EINSTEIN"!
 */

/////////////////////////////manipulando objetos literais


/* var bio = {
    "nome": "Andrei",
    "idade": 35,
    "profissão": "Desenvolvedor",
    "contato": {
        "celular": "000-0000",
        "email": "andreiricardorodrigues@gmail.com",
        "github": "AndreiRicardo",
        "local": "registro"
    },
    "msgbv": "laçlalçaçalalalalalla",
    "Skills": ["awesome", "programing", "teaching", "JS"],
    "biopic": "images/fry.jpg"

} */



/* ///// tratando array de objetos
Object.entries(bio.Skills).forEach(([key, value]) => {
    return $("#topContacts").append(value, "<br>");
}); */

//////// */// trazendo imagem pelo js
/* var myImg = new Image(197, 148);
myImg.src = bio.biopic; */
/* var div = document.createElement("div");
var divSkill = document.createElement("divSkill");
var divContato = document.createElement("divContato");
document.body.insertBefore("div", "divContato");
//document.body.insertBefore("div", "divSkill"); */


/* $("#topContacts").append(

    myImg,
    "<br> Nome: \t",
    bio.nome,
    "<br> Idade: \t",
    bio.idade,
    "<br> Profissão: \t",
    bio.profissão,
    "<br>"
   
    
);
 */
/*  Object.entries(bio.contato).forEach(([key, value]) => {
    return $("#divContato").append(key, ': \t', value, "<br>");
});
Object.entries(bio.Skills).forEach(([key, value]) => {
    return "Skill: \t", $("#divSkill").append(value, "<br>")
});
*/

/* Object.keys(bio.Skills).forEach(function(key) {

                        console.log(key, bio.Skills[key]);
                        return key, bio.Skills[key] + "<br>";

                    }); 
 */




////////////////// exercicio aula 21////////
////////seçoes do curriculo

var projects = [
        {
            "title": "save the world",
            "date": "2016",
            "description": "cool",
            "images": ["images\fry.jpg", "images\fry.jpg", "images\fry.jpg"]
        },
        {
            "title": "final countdown",
            "date": "1988",
            "description": "end the world",
            "images": ["images\fry.jpg", "images\fry.jpg", "images\fry.jpg"]
        }

    
]

var bio = {
    "name": "Andrei",
    "role": "developer",
    "contacts": {"mobile": "00-0000-0000", "email": "email@email.com", "github": "gitSomeone","twitter": "@andreidev"},
    "skills" : ["php", "js", "funny", "web api", "java"],
    "welcomes": "hi i'm a developer, so what!"
}

var education = {
    "schools": [
        {
            "name": "nova southeastern unvisercity",
            "city": "fort lauderdale, FL",
            "degree": "master",
            "majors": [CS],
            "date": 2013,
            "url": "http://exemplo.com"
        },
         {
            "name": "unisep",
            "city": "registro, SPL",
            "degree": "degree",
            "majors": [CS],
            "date": 2017,
            "url": "http://exemplo.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "JAvaScript crash coureses",
            "school": "Udacity",
            "date": 2017,
            "url": "http://www.udacity.com/courses/ude84"
        }
    ]
}
var work = {
    "jobs":[
        {
            //aqui vai um objeto
        },
        {
            //aqui vai outro
        }

    ]
}



if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}


///////// condicional
// fiz uma nota aqui


