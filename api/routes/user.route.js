import express from 'express';
import { test } from '../controllers/user.controller.js'; // não se esquecer da extensão .js

const router = express.Router()

router.get('/test', test);

export default router;