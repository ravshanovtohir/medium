import db from "../config/db.config.js"
import sql from "../sql/sql.user.js"

async function getUsers() {
    const post = await db(sql.GET)
    return post
}

async function getUsersWithPost() {
    const post = await db(sql.GET_USER_WITH_POST)
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