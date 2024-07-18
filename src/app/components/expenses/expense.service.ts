import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Expense {
  id: number;
  descricao: string;
  valor: number;
  type: string;
  month: string | number;
}


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expensesSubject = new BehaviorSubject<Expense[]>([]);
  expenses$ = this.expensesSubject.asObservable();

  private expenses: Expense[] = [];
  private nextId = 1;

  getExpenses() {
    return this.expenses$;
  }

  addExpense(expense: Expense) {
    expense.id = this.nextId++;
    this.expenses.push(expense);
    this.expensesSubject.next(this.expenses);
  }

  updateExpense(expense: Expense) {
    const index = this.expenses.findIndex(d => d.id === expense.id);
    if (index !== -1) {
      this.expenses[index] = expense;
      this.expensesSubject.next(this.expenses);
    }
  }

  deleteExpense(id: number) {
    this.expenses = this.expenses.filter(d => d.id !== id);
    this.expensesSubject.next(this.expenses);
  }
}
