//makes the code a bit more reusable

//for eg imagine you write a function that returns whatever you pass inside it

function identity(num: number): number {
    return num;
}
// works for number but what if I pass string? i ahve to create another func
//instead leave it as a placeholder 

function identityG<T>(num : T) : T{
    return num;
}

//now this works for
identityG(43);
identityG("Lalit");
identityG({
    wallah : "hey"
});

//GENERIC TYPES ->

type APIResponse<T> = {
    success : boolean;
    data : T
}

//now
// type User = {
//     name : string;
// }

// const res : APIResponse<User> = {
//     success : true,
//     data : {
//         name : "hey"
//     }
// }
// or i can use an array instead of user

const res1 : APIResponse<number[]> = {
    success : true,
    data : [1,2,3]
}


//Generic Interface
interface Box<T> {
    value: T;
}

const numBox: Box<number> = {
    value: 20
};
//OR
const stringBox: Box<string> = {
    value: "chai"
};

//Multiple generic types
function pair<T, U>(first: T, second: U) {
    return {
        first,
        second
    };
}

pair("Lalit", 20); //usage
pair(22,"ss")


// realworld eg
type ApiResponse<T> = {
    success: boolean;
    message: string;
    data: T;
}
//user Route 
type User = {
    id: string;
    email: string;
}

const response: ApiResponse<User> = {
    success: true,
    message: "User found",
    data: {
        id: "1",
        email: "lalit@gmail.com"
    }
};

//product
type Product = {
    name: string;
    price: number;
}
const res: ApiResponse<Product[]> = {
    success: true,
    message: "Products fetched",
    data: [{
        name : "iphone",
        price :22
    }] //array of productss
}