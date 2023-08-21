import { addExpense, getExpense, deleteExpense ,changeExpense} from '../controllers/expense.js';
import { addIncome, getIncomes, deleteIncome, changeIncome } from '../controllers/income.js';
import express from 'express';

const router = express.Router();

router
    .post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .get('/edit-expense/', changeIncome)
    .patch('/edit-income/:id',changeIncome)
    .patch('/edit-expense/:id',changeExpense);
export default router;