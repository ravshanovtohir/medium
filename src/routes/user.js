import user from '../controllers/user.js'
import { Router } from 'express'

const router = Router()

router.get('/api/users', user.GET)
router.get('/api/users/:userId', user.GET)
router.get('/api/usersWithPost', user.GET_USERS_WITH_POST)

export default router