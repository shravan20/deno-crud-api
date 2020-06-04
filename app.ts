import snowlight, {  Request, Response } from "https://deno.land/x/snowlight/mod.ts";
import userRoute  from './routers/userRoute.ts';

const app = snowlight();

// app.use(app.json());
// app.use(app.urlencoded());

app.get("/", async (req: Request, res: Response) => {
	res.send('Hello world!');
});

app.use( userRoute );


app.listen({
	port: 3000
}, () => console.log("Server started! 🔥"));
