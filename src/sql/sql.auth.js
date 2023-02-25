const REGISTER = `
insert into users (user_email, user_password) values 
($1, 
$2
)
returning *
;
`

const LOGIN = `
select
    *
from users
where user_email = $1 and user_password = $2
;
`

const CHECK_EMAIL = `
select
    *
from users
where user_email = $1
;
`


export default {
    REGISTER,
    LOGIN,
    CHECK_EMAIL
}