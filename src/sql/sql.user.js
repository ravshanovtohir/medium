const GET = `
    select * from users;
`

const GET_USER_BY_ID = `
select * from users where user_id = $1;
`

export default {
    GET,
    GET_USER_BY_ID
}