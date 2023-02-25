import db from "../config/db.config.js"
import sql from "../sql/sql.user.js"

async function getUsers() {
    const post = await db(sql.GET)
    return post
}


export default {
    getUsers
}