import User from "../../models/User.js";

export default async (req,res) => {
    try {
        let alUsers = await User.find()
        return res.status(200).json({
            success: true,
            message: "users found",
            response: alUsers
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "not found",
            response: null

        })
    }
}