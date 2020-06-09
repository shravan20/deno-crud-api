import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUserDetails, createUser } from "../controllers/userController.ts";
// import { simpleMiddleware } from "../middlewares/testMiddleware.ts";

const router = new Router();


// router.post("/user", simpleMiddleware, createUser)
// router.get("/user/:id", simpleMiddleware, getUserDetails)

router.post("/user", createUser);
router.get("/user/:id", getUserDetails);


export default router;

