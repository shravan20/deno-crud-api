import { getUserDetails, createUser, updateUser, removeUser }  from "../controllers/userController.ts";
import { Router, Route } from "https://deno.land/x/snowlight/mod.ts";
import simpleMiddleware from "../middlewares/testMiddleware.ts";

const router = Router();

router
    .post("/user", simpleMiddleware, createUser)
    .get("/user/:id", simpleMiddleware, getUserDetails)
    .put("/user", simpleMiddleware, updateUser)
    .delete("/users/:id", simpleMiddleware, removeUser);

export default router;