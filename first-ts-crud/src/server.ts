import express from "express"
import type {Request, Response,NextFunction} from "express"; //at runtime



const app = express();
interface User {
    id : number
    name : string,
    username : string,
}
const users: User[] =[]; //array of user


//to parse json and all
app.use(express.urlencoded({extended : true}));
app.use(express.json());


// GET    /              -> Hello TS
// GET    /users
// GET    /users/:id
// POST   /users
// PATCH  /users/:id
// DELETE /users/:id

app.get("/", (req : Request, res : Response)=>{
    return res.send("hello ts");
    console.log("hey");
})

app.post("/users",(req, res)=>{
    let body : User = req.body;
    users.push(body);
    res.redirect("/users");
})

app.get('/users', (req : Request, res: Response)=>{
    return res.send(users);
})
// for...in
//         ↓
// INdex / Keys
// for...of     ↓
// Object / Values
app.get('/users/:id', (req : Request, res: Response)=>{   
    const id :number = Number(req.params.id);

        for( let user of users){
            if(id === user.id){
                return res.send(user);
            }
        }
})
//flow of patch 
// see if user exists -> loop through users find the user -> then use a for loop as see what the 
// incoming body is telling you to change

//Object.assign(user,body)
app.patch('/users/:id', (req,res)=>{
    console.log("patch hit");
    const id : number = Number(req.params.id);
    const body : Partial<User> = req.body; //what if only name is sent

    for(let user of users){
        if(id === user.id){
            //update whatever using a loop with type complexity
            // for(let key  in body){
            //     const typedKey = key as keyof User ; // name | id | username
            //     if(typedKey !== undefined){
            //         user[typedKey] = body[typedKey];
            //     }
            // }
            Object.assign(user, body);
            return res.send(user);
        }
    }
})

app.listen(8000, ()=>{
    console.log("Server running");
})