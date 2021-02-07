import express from 'express'
const router = express.Router()
import { authUser, getUsersProfile, registerUser, updateUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.post('/login',authUser)
router.route('/profile').get(protect,getUsersProfile).put(protect,updateUserProfile)


export default router;