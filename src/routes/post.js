import post from '../controllers/post.js'
import { Router } from 'express'
import checkToken from '../middlewares/checkToken.js'

const router = Router()


router.get('/post/add', checkToken.checkToken, post.POST)
// router.post('/auth/login', auth.LOGIN)

export default router