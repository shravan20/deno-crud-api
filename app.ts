import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import userRoute  from "./routers/userRoute.ts";
import { errorHandler }  from "./middlewares/errorMiddleware.ts";
const app = new Application();


/**
 *  Middleware to link user-routes
 * */
app.use( await userRoute );


app.listen({
	port: 3001
}, () => console.log("Server started! 🔥"));
