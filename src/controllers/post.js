import error from '../utils/error.js'
import modelPost from '../model/model.post.js'
import modelUser from '../model/model.user.js'
import jwt from '../utils/jwt.js'

const POST = async (req, res, next) => {
    try {
        let { post_title, post_content } = req.body
        let { user_id } = jwt.verify(req.headers.token)

        console.log();

        if (!post_title) {
            return next(
                new error.ValidationError(400, "Post Title required")
            )
        }

        if (!post_content) {
            return next(
                new error.ValidationError(400, "Post content required")
            )
        }

        if (post_title.length < 15 && post_title.length > 128) {
            return next(
                new error.ValidationError(400, "Post title length must be longer 15 and less then 150")
            )
        }

        if (post_content.length < 30) {
            return next(
                new error.ValidationError(400, "Post content length must be longer 30")
            )
        }

        let newPost = await modelPost.addPost({ post_title, post_content, user_id })
        let user = await modelUser.getUser({ user_id })

        newPost.post_author = user.user_name

        delete newPost.post_id
        delete newPost.user_id


        console.log(newPost);



    } catch (err) {
        throw new error.InternalServerError(err.message)
    }
}

export default {
    POST
}