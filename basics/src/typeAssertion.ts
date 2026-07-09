// let response : any = '42'

// let numeric : number = response.
//when i do this wihtout assertion there are no method suggestion after response. for numbers


let response : any = '42'

let numeric : number = (response as string).length
//here use "as" string to assert than its a string (telling the compiler to trust that itll be a string)
//real world eg. loading string from env


//more eg

type Book = {
    name : string
}

let bookString = '{"name" : "Lalit"}' //string ke andar obj dalke dekho

// let bookObject = JSON.parse(bookString)
//  //there's no guarentee it'll be Book type you created so you forcefully assert
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);


//realworld eg
//when importing stuff from DOM you wont know the method so you would have to assert it 
//eg

let inputElem = document.getElementById("username") as HTMLInputElement