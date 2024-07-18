import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expense, ExpenseService } from './expense.service';
import { MonthStateService } from '../month-selector/month-state.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expense$;
  monthState$;
  expenseForm: FormGroup;
  editMode = false;
  currentexpenseId?: number;

  constructor(private fb: FormBuilder, private expenseService: ExpenseService, private monthState: MonthStateService) {
    this.expenseForm = this.fb.group({
      descricao: ['', Validators.required],
      valor: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      type: ['', Validators.required]
    });

    // Inicializar o Observable após a inicialização do serviço
    this.expense$ = this.expenseService.getExpenses();
    this.monthState$ = this.monthState.getMesSelecionado();
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.expenseForm.invalid) return;

    const expense: Expense = {
      id: 0,
      descricao: this.expenseForm.value.descricao,
      valor: this.expenseForm.value.valor,
      type: this.expenseForm.value.type,
      month: this.monthState$
    };
    console.log(this.monthState$, 'mont')

    if (this.editMode && this.currentexpenseId != null) {
      expense.id = this.currentexpenseId;
      this.expenseService.updateExpense(expense);
    } else {
      this.expenseService.addExpense(expense);
    }

    this.expenseForm.reset();
    this.editMode = false;
  }

  onEdit(expense: Expense) {
    this.editMode = true;
    this.currentexpenseId = expense.id;
    this.expenseForm.patchValue(expense);
  }

  onDelete(id: number) {
    this.expenseService.deleteExpense(id);
  }
}
