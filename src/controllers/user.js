import modelUser from "../model/model.user.js";
import error from "../utils/error.js";

const GET = async (req, res, next) => {
    try {
        let { userId } = req.params
        let { page = 1, limit = 10 } = req.query

        userId = parseInt(userId)
        page = parseInt(page)
        limit = parseInt(limit)

        if (userId) {
            const user = await modelUser.getUser({ user_id: userId })

            if (!user) {
                return res
                    .status(404)
                    .json({
                        status: 404,
                        message: "The user not found with this user id"
                    })
            }

            return res
                .status(201)
                .json({
                    status: 200,
                    user
                })


        }

        const users = await modelUser.getUsers({ page, limit })

        return res
            .status(201)
            .json({
                status: 200,
                users: users
            })



    } catch (err) {
        throw new error.InternalServerError(error.message)
    }
}

const GET_USERS_WITH_POST = async (req, res, next) => {
    try {
        console.log(1);
        let { page = 1, limit = 10 } = req.query
        page = parseInt(page)
        limit = parseInt(limit)

        const users = await modelUser.getUsersWithPost({ page, limit })

        return res
            .status(201)
            .json({
                status: 200,
                users: users
            })



    } catch (err) {
        throw new error.InternalServerError(err.message)
    }
}

export default {
    GET,
    GET_USERS_WITH_POST
}