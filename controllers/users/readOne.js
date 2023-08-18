import User from "../../models/User.js";

export default async (req,res) => {
    try {
        let readOneUsers = await User.findOne({ _id:req.params.id}).select("mail photo -_id")
        return res.status(200).json({
            success: true,
            message: "users found",
            response: readOneUsers
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "not found",
            response: null

        })
    }
}