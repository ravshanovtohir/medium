import db from "../config/db.config.js"
import sql from "../sql/sql.auth.js"

async function register({ user_email, user_password }) {
    const [user] = await db(sql.REGISTER, user_email, user_password)
    return user
}

async function login({ user_email, user_password }) {
    const user = await db(sql.LOGIN, user_email, user_password)
    return user[0]
}

async function checkEmail({ user_email }) {
    const email = await db(sql.CHECK_EMAIL, user_email)
    return email[0]
}

export default {
    register,
    login,
    checkEmail
}