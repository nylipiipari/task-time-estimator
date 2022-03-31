import { Router } from 'express';

const router = Router();

export interface Item {
  id: number;
  name: string;
}

export interface Items {
  [key: number]: Item;
}

const items: Items = {
  1: {
    id: 1,
    name: 'Create Project',
  },
  2: {
    id: 2,
    name: 'Setup Google Billing Account',
  },
  3: {
    id: 3,
    name: 'Update WordPress Core',
  },
};

router.get('/', (req, res) => {
  res.json(items);
});

export default router;