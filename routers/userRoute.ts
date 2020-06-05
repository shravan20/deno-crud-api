import { getUserDetails, createUser, updateUser, removeUser }  from "../controllers/userController.ts";
import { Router, Route } from "https://deno.land/x/snowlight/mod.ts";
import simpleMiddleware from "../middlewares/testMiddleware.ts";

const router = Router();

router
    .get("/user/:id", simpleMiddleware, getUserDetails)
    .post("/user", simpleMiddleware, createUser)
    .put("/user", simpleMiddleware, updateUser)
    .delete("/users/:id", simpleMiddleware, removeUser);

export default router;