type TeaRecipe = {
    "water" : number,
    "sugar" : number
}

class MasalaChai implements TeaRecipe{
    "water" : 21;
    "sugar" :22
}
//implements only works only if the type/interface holds an obj, not union or primitive

//type holds the data
//interface should hold the behaviour eg

interface PaymentGateway{
    pay(amount : number) : void;
}

class RazorPay implements PaymentGateway{
    //now this should include teh pay func else error 
    pay(amount : number){
        console.log("razorpay se")
    }
}

class Stripe implements PaymentGateway{
    pay(amount : number){
        console.log("stripe se")
    }
}
//this is where interface is useful

//more on them 

interface Chai{
    readonly flavour : string,
    sugar? : number
}

const masala : Chai = {
    flavour : "cutting",
    sugar : 2
}

// /interface defining func

interface yeah{
    (price : number): string
}

const applyDisc : yeah = (num)=>{
    return "good only "
}

//whatever you're making it should define the interface properly 

interface tea {
    start(price : number) : number,
    stop(): number
}

const checkInterface : tea = {
    start(price){
        return price*2
    },
    stop(){
        return -1;
    }
}

console.log(checkInterface.start(2));