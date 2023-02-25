import error from '../utils/error.js'
import modelPost from '../model/model.post.js'
import jwt from '../utils/jwt.js'

const POST = async (req, res, next) => {
    try {
        let { post_title, post_content } = req.body
        let { user_id } = jwt.verify(req.headers.token)


        // let a = await modelPost.addPost()

        console.log(post_title, post_content);

    } catch (err) {
        throw new error.InternalServerError(err.message)
    }
}

export default {
    POST
}