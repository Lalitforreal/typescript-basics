// AND-ing types, optional readonly values

type BaseChai = {
    teaLeaves : number,
    laung? : number //this is optional

}
type Extra = {masala : number}

type MasalaChai = BaseChai & Extra //this type should have both tealeaves adn masala


//see it works without the laung too as i added the ? which makes it optional
const cup : MasalaChai = {
    teaLeaves : 33,
    masala :2
}
 //both works
const cupLaung : MasalaChai = {
    teaLeaves : 33,
    masala :2,
    laung : 2
}


//readonly - eg
//imagine you're creating a config for a user

type Config = {
    readonly appname : string,
    username : string
}

const Cfg : Config = {
    appname : "insta",
    username : "lalit"
}
//now you created using the type template now when you try to change the appname you wont be able to as it is readonly
// Cfg.appname = "skdfld"



//Duck typing /structural typing

type Cup = {size : string};
let smallCup : Cup = {size : "200ml"}

let bigCup = {size : "500ml", material : "steel"};

smallCup = bigCup; //this wont causae any error even if there is an extra entry in the object named material

console.log(smallCup); //OP is bigCup 
//if you tried to change the small cup by doing
// let smallCup: Cup = {
//     size: "200ml",
//     material: "steel"
// };

//wont work.



// SPLIT OUT DATA TYPES
//seperation promotes code clarity.

type Item = {name : string, quantity : number};
type Address = {street : string, pin : number};

type Order = {
    id : String,
    items : Item[],
    address : Address
}



type Chai= {
    name : string,
    price : number,
    isHot : boolean
}


// func
const updateChai = (updates: Partial<Chai>)=>{
    console.log("updating chai with " + updates)
}

updateChai({price : 23})

type Kafee= {
    name : string,
    price : number,
    isHot : boolean
}


// func
const updateKafee = (updates: Required<Kafee>)=>{
    console.log("updating chai with " + updates)
}

// updateKafee({price : 23})



type chaiPick= {
    name : string,
    price : number,
    isHot : boolean,
    ingredient : string
}

type BasicChai = Pick<chaiPick, "name" | "price"> //similar to partial but both of these fields are required 

const chaiInfo : BasicChai = {
    name : "Lal",
    price :22
} //any one of them missing will lead to error 

type omitCHAI = Omit<chaiPick, "ingredient">; //this will omit the requirement of mentioning ingridient in any varible of public chai