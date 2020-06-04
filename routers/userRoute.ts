import { getUserDetails, getUsers, createUser, updateUser, removeUser }  from "../controllers/userController.ts";
import { Router, Route } from "https://deno.land/x/snowlight/mod.ts";

const router = Router();

router
    .get("/user/:id", getUserDetails)
    .get("/user", getUsers)
    .post("/user", createUser)
    .put("/user", updateUser)
    .delete("/users/:id", removeUser);

export default router;