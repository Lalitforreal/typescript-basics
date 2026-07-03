// more of a good practice instead of a concept

function getChai( kind : string | number){
    if(typeof kind === "string"){ //type guard - after this ts narrows the type

        return `Making ${kind} of chai `
    }
    return `chai order no. ${kind}` //automatically you knwo ki this will be a number adn when you do kind.
    // you will be suggest with appropriate number functions
}
//pata lagao ki your data is of which type adn then return accordingly


//truthiness find

function serveChai(msg? : string){ // the ? means optional that it will work without the params too
    if(msg){
        return `Serving ${msg}`
    }
    return `no params no serving`
}

// console.log(serveChai("masala chai gang"));

//exhaustive checks
function orderChai(size : "small" | "medium" | "large" | number){
    if(size === 'small' || size === "medium" || size === "large"){
        return `chai cutting string size : ${size}`
    }
    return `number hai op ${size}`
}

class kulhadChai{
    serve(){
        return `kulhad chai gang`
    }
}
class Cutting{
    serve(){
        return `Cutting gang`
    }
}
//both classes have same method naem so here our safety guards
function serve(chai : kulhadChai | Cutting){
    if(chai instanceof kulhadChai){
        return chai.serve(); //kulhad wala hi call hoga
    }

}

// youc an make your own types adn guard checking there is really interesting

type chaiOrder = {
    type : string,
    sugar : number
}

//validation func
function isChaiOrder(obj : any): obj is chaiOrder{ //return type should be chaiorder type
    return (
        typeof obj === "object" && 
        obj!= null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item : chaiOrder | string){
    if(isChaiOrder(item)){
        return  `serving ${item.type} with sugar : ${item.sugar}`
    }
    //if strimng so handle it
}

let item : chaiOrder = {
    type : "ehhe",
    sugar : 22
}
console.log(serveOrder(item));



//you can create types and then narrow them too as use case func 

type MasalaChai = {type : "masala"; spicelevel : number}
type elaichiChai = {type : "elaichi"; amount : number}
type cutting = {type : "cutting"; aroma : number}

//now you can narrow these using switch case

type Chai = MasalaChai | elaichiChai | cutting

function MakeChai(order : Chai){
    switch (order.type) {
        case "masala":
            return "masala chai"
            break;
    
        case "elaichi" :
            return "elaichi"
            break;
        
        case "cutting" :
            return "cutting"
            break;
    }
}

console.log(MakeChai({type : "masala", spicelevel : 22}));
