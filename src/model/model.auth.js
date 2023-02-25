import db from "../config/db.config.js"
import sql from "../sql/sql.auth.js"

async function register({ user_name, user_email, user_password }) {
    const [user] = await db(sql.REGISTER, user_name, user_email, user_password)
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

async function checkUserName({ user_name }) {
    const name = await db(sql.CHECK_USER_NAME, user_name)
    return name[0]
}

export default {
    register,
    login,
    checkEmail,
    checkUserName
}