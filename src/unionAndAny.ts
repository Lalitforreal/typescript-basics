let requestStatus : "success" | "failed" | "Pending" = "Pending";

requestStatus = "success";

const orders = ['22','21','1'];

let currentOrder : string | undefined ; //right now its showing any 
for(let order of orders){
    if(order === '1'){
        currentOrder = order;
        break;
    }
}

//i can update this current order right here and it wont make a difference be it a number or self made type as its ANy
console.log(currentOrder); // here it shows undefined or string 