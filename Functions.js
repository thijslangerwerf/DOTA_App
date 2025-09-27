function begroet(name) {{}
    console.log("Hello "+ name);
}

begroet("Thijs");
begroet("Erik");
begroet("Tim");

function optellen (a,b){
    return a + b;
}

console.log(optellen(69,67));
console.log(optellen(2,6));
console.log(optellen(23,1));

function minOfPlus (a,b){
    if (a < b) 
        {
        return "Dit is een mingetal"
        }
    else 
        {
        return "Dit is een plusgetal"
        }
}

console.log(minOfPlus(6,24));