import jwt from '../utils/jwt.js'
import error from '../utils/error.js'
import modelUser from '../model/model.user.js'

//checkToken

const checkToken = async (req, res, next) => {
    try {
        const { token } = req.headers

        if (!token) {
            throw new error.AuthorizationError(401, "user is not authorized!")
        }

        const { user_id, agent } = jwt.verify(token)

        if (!(req.headers['user-agent'] == agent)) {
            throw new error.AuthorizationError(401, "token is invalid!")
        }

        return next()
    } catch (error) {
        return next(error)
    }
}
export default {
    checkToken
}