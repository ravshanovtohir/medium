import auth from '../controllers/auth.js'
import { Router } from 'express'

const router = Router()

router.post('/auth/register', auth.REGISTER)
router.post('/auth/login', auth.LOGIN)

export default router