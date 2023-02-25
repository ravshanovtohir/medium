import modelUser from "../model/model.user";
import error from "../utils/error";

const GET = async (req, res, next) => {
    try {
        const a = await modelUser.getUsers()
        console.log(a);
    } catch (err) {
        throw new error.InternalServerError(error.message)
    }
}

export default {
    GET
}