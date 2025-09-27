let gebruikersKeuze = 9
let cijfers = [10, 20, 30, 40, 50];
// console.log(cijfers);
// console.log(cijfers[1]);

// if (typeof gebruikersKeuze === 'number'){
// if (gebruikersKeuze < cijfers.length)
// {
//     console.log(cijfers[gebruikersKeuze]);
// }
// else
// {
//     console.log("Dit is geen geldige index");

// }
// }

// cijfers.push(69); //cijfer erachter
// cijfers.pop();      //laatste cijfer eraf
// cijfers.unshift(5); //cijfer 5 ervoor


// console.log("FOREACH Alle cijfers:");
// cijfers.forEach((cijfer) => 
// {
//   if (cijfer > 25)
//     console.log(cijfer);
// }
// );

// console.log("FOR Alle cijfers:");
// for (i=0; i < cijfers.length; i++  )
// {
//     console.log(cijfers[i]);
// }

let verdubbeld = cijfers.map((cijfer) => cijfer * 2);
console.log(verdubbeld);

let gefilterd = cijfers.filter((cijfer) => cijfer < 20);
console.log(gefilterd);

let som = cijfers.reduce((totaal, cijfer) => totaal + cijfer, 0);
console.log(som);

let index = cijfers.indexOf(30);
console.log(index);

let bevat = cijfers.includes(40);
console.log(bevat);

let gesorteerd = [...cijfers].sort((a, b) => a - b); //... vernaggelt je araay NIET
console.log(gesorteerd);

let omgekeerd = [...cijfers].reverse();
console.log(omgekeerd);