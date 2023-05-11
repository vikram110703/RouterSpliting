import express from 'express';
import { getAllUsers } from '../controllers/user.js';
import { register } from '../controllers/user.js';


const router = express.Router();

router.post("/users/new",register);

router.get("/users/all",getAllUsers);

router.get("/",(req,resp)=>{
    resp.send("WELCOME !  This is Home Paze ")
});





export default router;