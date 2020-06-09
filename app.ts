import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routers/userRoute.ts";

const port = 3000;
const app = new Application();

//Logger
app.use(async (ctx, next) => {
	await next();
	const rt = ctx.response.headers.get("X-Response-Time");
	console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
  });

  // Timing
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.response.headers.set("X-Response-Time", `${ms}ms`);
  });

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${port}`);
await app.listen({ port });