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

export default {
    POST
}