import { Router } from "express";
import {saveUser, updateUser} from "../controller/userController";
    

const router = Router();

router.post("/users", saveUser);
router.put("/updateUser", updateUser);

export default router;