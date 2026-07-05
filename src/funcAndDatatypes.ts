function makeChai(type : string, cups : number): number {
    return 2;
}

makeChai("hey", 33);

//use logger function 
function logger() : void{
    console.log("chai chai ");
}

function createChai(order : {
    type : string;
    sugar : number
}) : object {
    return order;
}

console.log(createChai({
    type : "cutting",
    sugar : 22
}));


// arrays
const wishList : string[] = ["sub 20 5k","nah"]; //array of strings

type Chai =  {
    type : string,
    sugar : number
}

const variety :readonly Chai[] = [{ //custom type array which is readonly you cant push into it 
    type : "masala",
    sugar : 2
},
{
    type : "cutting",
    sugar : 1
}]

//Tuples - like array  

const chaiTuple : [string, number] = [ "hey" , 2]; //whatever format you give should be followed orderwise etc