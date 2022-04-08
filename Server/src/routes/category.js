import { Router } from 'express';
import { addcategory, get, listcategory, removecatgory, updatecategory, read } from '../controllers/category';
// const { checkAuth } = require('../middleware/checkAuth');
import { checkAuth } from '../middleware/checkAuth';

const router = Router();



router.get("/category", listcategory);
router.get("/category/:id", get);
router.post('/categorys', addcategory);
router.get('/category/:slug', read);
router.delete("/category/:id", removecatgory);
router.put("/category/:id", updatecategory);

export default router;

