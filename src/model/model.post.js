import db from "../config/db.config.js"
import sql from "../sql/sql.post.js"

async function addPost() {
    const post = await db(sql.POST)
    return post
}


export default {
    addPost
}