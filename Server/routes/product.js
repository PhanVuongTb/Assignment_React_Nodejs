import { Router } from "express";
import { creat, list, read, remove, update } from "../controllers/product";
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth';
import { userById } from "../controllers/user";
const router = Router();

router.get('/products', list);
router.get('/products/:id', read);
router.post('/products', creat);
router.delete('/products/:id', remove);
router.put("/products/:id", update)

router.param("userId", userById);

export default router;