import error from '../utils/error.js'
import modelPost from '../model/model.post.js'
import modelUser from '../model/model.user.js'
import jwt from '../utils/jwt.js'
import timer from '../utils/index.js'

const POST = async (req, res, next) => {
    try {
        let { post_title, post_content } = req.body
        let { user_id } = jwt.verify(req.headers.token)



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
        delete newPost.time_row

        return res
            .status(201)
            .json({
                status: 201,
                message: 'The post successfully created!',
                post: newPost
            })


    } catch (err) {
        throw new error.InternalServerError(err.message)
    }
}

const GET = async (req, res, next) => {
    try {
        let { postId } = req.params
        let { page = 1, limit = 10 } = req.query

        postId = parseInt(postId)
        page = parseInt(page)
        limit = parseInt(limit)

        let posts = await modelPost.getPosts({ page, limit })

        if (postId) {

            const post = await modelPost.getPost({ post_id: postId })

            const a = await modelPost.updateTimeRow({ post_id: postId })

            if (!post) {
                return res
                    .status(404)
                    .json({
                        status: 404,
                        message: "The post not found with this post id"
                    })
            }

            return res
                .status(201)
                .json({
                    status: 200,
                    post
                })

        }

        return res
            .status(201)
            .json({
                status: 200,
                post: posts
            })
    } catch (err) {
        throw new error.InternalServerError(err.message)
    }

}

export default {
    POST,
    GET
}