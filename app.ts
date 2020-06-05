import snowlight, {  Request, Response } from "https://deno.land/x/snowlight/mod.ts";
import userRoute  from "./routers/userRoute.ts";
import { errorHandler }  from "./middlewares/errorMiddleware.ts";
const app = snowlight();

/**
 *  In-built Middlewares to Parse the Request Body
 * */
app.use(await app.json());

/**
 *  In-built Middlewares to Parse the URL-Encoded format
 * */
app.use(await app.urlencoded());

/**
 *  Middleware to link user-routes
 * */
app.use( await userRoute );

/**
 * Error Handling Middleware
 */
app.use( await errorHandler );   


app.use(()=>{
	console.log('Hi I am Legion')
});

app.listen({
	port: 3001
}, () => console.log("Server started! 🔥"));
