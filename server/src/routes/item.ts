import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: '' });
});

router.get('/items', (req, res) => {
  res.json({ message: 'Items' });
});

export default router;