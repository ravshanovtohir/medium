const GET = `
select
    user_id,
    user_name,
    user_email
from users
inner join posts as p on u.user_id = p.post_author
order by p.time_row DESC
offset $1 limit $2
`



const GET_USER_BY_ID = `
select
    user_id,
    user_name,
    user_email
from users 
where user_id = $1;
`

const GET_USER_WITH_POST = `
select
    u.user_id,
    u.user_name,
    u.user_email,

    json_agg(json_build_object('post_id', p.post_id, 'post_title', p.post_title, 'post_content', p.post_content)) as Post
from users as u
inner join posts as p on u.user_id = p.post_author
group by u.user_id, u.user_name, u.user_email, p.time_row
order by p.time_row DESC
offset $1 limit $2
;
`

export default {
    GET,
    GET_USER_BY_ID,
    GET_USER_WITH_POST
}