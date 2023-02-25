import db from "../config/db.config.js"
import sql from "../sql/sql.user.js"

async function getUsers({ page, limit }) {
    const post = await db(
        sql.GET,
        (page - 1) * limit,
        limit
    )
    return post
}

async function getUsersWithPost({ page, limit }) {
    const post = await db(
        sql.GET_USER_WITH_POST,
        (page - 1) * limit,
        limit
    )
    return post
}

async function getUser({ user_id }) {
    const [user] = await db(sql.GET_USER_BY_ID, user_id)
    return user
}


export default {
    getUsers,
    getUser,
    getUsersWithPost
}