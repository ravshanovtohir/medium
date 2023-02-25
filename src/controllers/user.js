import modelUser from "../model/model.user.js";
import error from "../utils/error.js";

const GET = async (req, res, next) => {
    try {
        const a = await modelUser.getUsersWithPost()
        console.log(a);
        res.json(a)
    } catch (err) {
        throw new error.InternalServerError(error.message)
    }
}

export default {
    GET
}