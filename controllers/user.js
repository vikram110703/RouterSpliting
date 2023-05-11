
import {User} from "../models/user.js"; 
export const getAllUsers= async (req, resp) => {

    const users = await User.find({});
    resp.json({
        success: true,
        users,
    });
};

export const register= async (req, resp) => {

    const { name, email, password } = req.body;
    const users = await User.create({
        name,
        email,
        password,
    })
    resp.status(201).json({
        success: true,
        message: "Registered successfully",
    });
};

