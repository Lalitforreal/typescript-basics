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