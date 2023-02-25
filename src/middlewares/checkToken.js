import { verify } from './jwt.js'
import error from './error.js'

//checkToken

const checkToken = (req, res, next) => {
    try {
        const { token } = req.headers

        if (!token) {
            throw new error.AuthorizationError(401, "user is not authorized!")
        }

        const { userId, agent } = verify(token)

        if (!(req.headers['user-agent'] == agent)) {
            throw new error.AuthorizationError(401, "token is invalid!")
        }

        // const users = req.readFile('users')
        // let user = users.find(user => user.userId == userId)

        // if (!user) {
        //     throw new ClientError(401, "The token is invalid!")
        // }

        // req.userId = userId

        return next()
    } catch (error) {
        return next(error)
    }
}
export default {
    checkToken
}