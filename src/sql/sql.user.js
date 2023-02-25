const GET = `
select
    user_id,
    user_name,
    user_email
from users;
`

const GET_USER_BY_ID = `
select * from users where user_id = $1;
`

export default {
    GET,
    GET_USER_BY_ID
}