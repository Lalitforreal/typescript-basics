import cookie from "cookie";
import jwt from "jsonwebtoken";
import type { Socket } from "socket.io";
import type { ExtendedError } from "socket.io/dist/namespace";
function socketAuth(socket : Socket, next :  ( err? : ExtendedError)=>void) {
    try{
        const headerCookie : string | undefined = socket.request.headers.cookie;
        if(!headerCookie){
            //not valid 
            throw new Error("unauthorized")
        }
        const cookies = cookie.parse(headerCookie);
        const token : string = cookies.token;
        if(!token) {
            //invalid
            return next(new Error("unauth gang"));
        }
        const decoded : IUser = jwt.verify(token,process.env.jwtToken as string);
        if(!decoded){
            throw new Error("unauthorized")

        } //invalid
        socket.data = decoded.data;
        return next();
    }catch(err){
        return next(new Error("unauthorized"));
    }
}