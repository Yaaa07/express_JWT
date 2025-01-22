import express from 'express';
import { getUsers, getUsersById, CreateUser, UpdateUser, DeleteUser, loginUser } from "../controller/UserControllers.js";
import { verifyToken } from '../middleware/AuthMiddleware.js';

const router = express.Router();


router.get('/users', verifyToken, (req, res, next) => {
    console.log("Middleware passed for /users", req.user); 
    next();
}, getUsers);


router.get('/users/:id', verifyToken, (req, res, next) => {
    console.log(`Middleware passed for /users/${req.params.id}`, req.user); 
    next();
}, getUsersById);


router.post('/users', (req, res, next) => {
    console.log("Request body for creating user:", req.body); 
    next();
}, CreateUser);


router.patch('/users/:id', verifyToken, (req, res, next) => {
    console.log(`Middleware passed for updating /users/${req.params.id}`, req.user); 
    console.log("Request body for updating user:", req.body); 
    next();
}, UpdateUser);


router.delete('/users/:id', verifyToken, (req, res, next) => {
    console.log(`Middleware passed for deleting /users/${req.params.id}`, req.user); 
    next();
}, DeleteUser);


router.post('/login', (req, res, next) => {
    console.log("Request body for login:", req.body);
    next();
}, loginUser);

export default router;
