import db from "../config/db.config.js"
import sql from "../sql/sql.post.js"

async function addPost({ post_title, post_content, user_id }) {
    const [post] = await db(sql.POST, post_title, post_content, user_id)
    return post
}


export default {
    addPost
}