const REGISTER = `
insert into users (user_name, user_email, user_password) values 
($1, 
$2,
$3
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

const CHECK_USER_NAME = `
select
    *
from users
where user_name = $1
;
`


export default {
    REGISTER,
    LOGIN,
    CHECK_EMAIL,
    CHECK_USER_NAME
}