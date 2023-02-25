import error from '../utils/error.js'
import JWT from '../utils/jwt.js'
import sha256 from "sha256";
import modelAuth from '../model/model.auth.js';
import jwt from '../utils/jwt.js';

const REGISTER = async (req, res, next) => {
    try {

        let { user_email, user_password } = req.body
        let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
        const agent = req.headers['user-agent']

        user_email = user_email.trim()
        user_password = user_password.trim()



        if (!user_email) {
            return next(
                new error.ValidationError(400, "Email is required")
            )
        }

        if (!user_password) {
            return next(
                new error.ValidationError(400, "Password is required")
            )
        }

        if (user_password.length < 8) {
            return next(
                new error.ValidationError(400, "Minimum password length must be 8")
            )
        }

        if (user_password.length > 50) {
            return next(
                new error.ValidationError(400, "Maximux password length must be 50")
            )
        }

        if (!user_email.match(emailRegEx)) {
            return next(
                new error.ValidationError(400, "Invalid email address")
            )
        }

        let checkEmail = await modelAuth.checkEmail({ user_email })

        if (checkEmail) {
            return next(
                new error.ValidationError(400, "This email already registired. Please log in")
            )
        }

        let newUser = await modelAuth.register({ user_email, user_password: sha256(user_password) })

        delete newUser.user_password



        return res
            .status(201)
            .json({
                status: 201,
                message: 'The user successfully registired!',
                token: JWT.sign({ agent, ip, user_id: newUser.user_id }),
                user: newUser
            })
    } catch (err) {
        throw new error.InternalServerError(err.message)
    }
}

const LOGIN = async (req, res, next) => {
    try {
        // console.log(1);
        let { user_email, user_password } = req.body

        if (!user_email) {
            return next(
                new error.AuthorizationError(400, "Email is required")
            )
        }

        if (!user_password) {
            return next(
                new error.AuthorizationError(400, "Password is required")
            )
        }

        user_password = sha256(user_password)
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
        const agent = req.headers['user-agent']

        let user = await modelAuth.login({ user_email, user_password })

        if (!user) {
            return next(
                new error.AuthorizationError(400, "wrong email or password")
            )
        }

        delete user.user_password

        return res
            .status(201)
            .json({
                status: 201,
                message: 'The user successfully logged in!',
                token: JWT.sign({ agent, ip, user_id: user.user_id }),
                user: user
            })


    } catch (err) {
        throw new error.AuthorizationError(err.message)
    }
}

export default {
    REGISTER,
    LOGIN
}