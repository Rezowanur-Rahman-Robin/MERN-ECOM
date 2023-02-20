import express from 'express'
const router = express.Router()
import { 
    authUser, 
    deleteUser,
    getUserById,
    updateUser,
    getUsers, 
    getUsersProfile,
    registerUser,
    updateUserProfile, } from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'


router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login',authUser)
router.route('/profile').get(protect,getUsersProfile).put(protect,updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)


export default router;