import express from 'express';
import { getUsers, getUsersById, CreateUser, UpdateUser, DeleteUser, loginUser } from "../controller/UserControllers.js";
import { verifyToken } from '../middleware/AuthMiddleware.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getUsersById); 
router.post('/users', CreateUser);
router.patch('/users/:id', verifyToken, UpdateUser); 
router.delete('/users/:id', verifyToken, DeleteUser); 
router.post('/login', loginUser); 

export default router;
