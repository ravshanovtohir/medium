import db from "../config/db.config.js"
import sql from "../sql/sql.post.js"

async function addPost({ post_title, post_content, user_id }) {
    const [post] = await db(sql.POST, post_title, post_content, user_id)
    return post
}

async function getPosts({ page, limit }) {
    const post = await db(
        sql.GET,
        (page - 1) * limit,
        limit
    )
    return post
}

async function getPost({ post_id }) {
    const [post] = await db(sql.GET_BOOK_BY_ID, post_id)
    return post
}

async function updateTimeRow({ post_id }) {
    const [post] = await db(sql.UPDATE_POST, post_id)
    return post
}


export default {
    addPost,
    getPosts,
    getPost,
    updateTimeRow
}