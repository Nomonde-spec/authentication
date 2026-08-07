import { Router } from 'express';
import { login, logout, profile, register, refresh, updateProfileController } from '../controllers/authController';
import { authenticate } from '../middlewares/auth';
import { loginValidator, registerValidator } from '../validators/auth';

const router = Router();

router.post('/register', registerValidator, register);
router.post('/login', loginValidator, login);
router.post('/logout', logout);
router.post('/refresh', refresh);
router.get('/profile', authenticate, profile);
router.patch('/profile', authenticate, updateProfileController);

export default router;
