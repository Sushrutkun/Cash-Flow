// const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
// const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
import { addExpense, getExpense, deleteExpense } from '../controllers/expense.js';
import { addIncome, getIncomes, deleteIncome } from '../controllers/income.js';
import express from 'express';

const router = express.Router();

router
    .post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense);

export default router;


// module.exports = router