import post from '../controllers/post.js'
import { Router } from 'express'
import checkToken from '../middlewares/checkToken.js'

const router = Router()

router.get('/api/posts', checkToken.checkToken, post.GET)
router.get('/api/posts/:postId', checkToken.checkToken, post.GET)
router.post('/post/add', checkToken.checkToken, post.POST)
// router.post('/auth/login', auth.LOGIN)

export default router