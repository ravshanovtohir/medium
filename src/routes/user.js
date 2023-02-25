import user from '../controllers/user.js'
import { Router } from 'express'

const router = Router()

router.get('/api/users', user.GET)
router.get('/auth/users/:userId')

export default router