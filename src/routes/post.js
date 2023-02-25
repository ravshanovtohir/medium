import post from '../controllers/post.js'
import { Router } from 'express'

const router = Router()

router.get('/post/add', post.POST)
// router.post('/auth/login', auth.LOGIN)

export default router