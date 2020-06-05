import snowlight, {  Request, Response } from "https://deno.land/x/snowlight/mod.ts";
import userRoute  from './routers/userRoute.ts';
const app = snowlight();

/**
 *  In-built Middlewares to Parse the Request Body
 * */
app.use(app.json());

/**
 *  In-built Middlewares to Parse the URL-Encoded format
 * */
app.use(app.urlencoded());

/**
 *  Simple GET API - for Testing
 * */
app.get("/", async (req: Request, res: Response) => {
	res.send('Hello world!');
});


/**
 *  Middleware to link user-routes
 * */
app.use( userRoute );

/**
 * Error Handling Middleware
 */
   

app.listen({
	port: 3001
}, () => console.log("Server started! 🔥"));
