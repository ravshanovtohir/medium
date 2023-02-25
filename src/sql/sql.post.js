const POST = `
insert into posts (post_title, post_content, post_author) values
(
$1,
$2,
$3
)
returning *
;
`

const GET = `
select
    p.post_id,
    p.post_title,
    p.post_content,
    json_build_object('user_id', u.user_id, 'user_name', u.user_name, 'user_email', u.user_email) as User
from posts as p
left join users as u on p.post_author = u.user_id
group by u.user_id, post_id, post_title, post_content, p.time_row
order by p.time_row DESC
;
`

const GET_BOOK_BY_ID = `
select
    p.post_id,
    p.post_title,
    p.post_content,
    json_build_object('user_id', u.user_id, 'user_name', u.user_name, 'user_email', u.user_email) as User
from posts as p
left join users as u on p.post_author = u.user_id
where p.post_id = $1
group by u.user_id, post_id, post_title, post_content
order by post_id
;
`

const UPDATE_POST = `
update posts set
    time_row = time_row + 1
where post_id = $1
returning *
`

export default {
    POST,
    GET,
    GET_BOOK_BY_ID,
    UPDATE_POST
}
