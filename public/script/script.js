let phrase = `Bonjour tout le monde`;
console.log(phrase);
console.log(phrase.length);


let phrase1 = `Bonjour tout le monde `;
phrase1 = phrase1.replace(/\s/g, '');
console.log(phrase1);
console.log(phrase1.length);


// 6

/*
let str = `Bonjour tout le monde`;
let lastC = str.charAt(str.length-1); 
console.log(str);
*/
let a = `Bonjour tout le monde`;
console.log(a.substr(-1));




// 7
/*
let ret2 = "data-123".replace('data-','');
console.log(ret2);
*/

let retrieve = `Bonjour tout le monde`.replace(`Bonjour `, ``);
console.log(retrieve);  

/*
let phrase2 = `Bonjour`;
console.log(${phrase2} ${retrieve});

let phrase3 = `${phrase2} ${retrieve}';
*/


// 8
let retrieve2 = `Bonjour tout le monde`.replace(`tout le monde `, ``);
console.log(retrieve2);  



// 9
let phrase4 = `Bonjour tout le monde`;
let phrase5 = `Bonjour`;
let replacement = `String`;
console.log(phrase.replace (phrase4.replacement));



// 10



// 11


let phrase6 = `Bonjour tout le monde `;
console.log(phrase6.toLocaleLowerCase());


//12
//Find the first occurrence of "e":
let text1 = "Hello world, welcome to the universe.";
text1.indexOf("e");
console.log(text1.indexOf("e"));

//Find the first occurrence of "e", starting at position 5:
let text2 = "Hello world, welcome to the universe.";
text2.indexOf("e", 5);
console.log(text2.indexOf("e", 5));

// Find the first occurrence of "a":
let text3 = "Hello world, welcome to the universe.";
text3.indexOf("a");
console.log(text3.indexOf("a"));

//12
let phrase7 = `Bonjour tout le monde `;
console.log(phrase7.indexOf("o",2));

//13
let nom = `henin`;
console.log(nom.toUpperCase());