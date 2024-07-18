import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MonthSelectorComponent } from '../month-selector/month-selector.component';



@NgModule({
  declarations: [ExpenseComponent, MonthSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [ExpenseComponent, MonthSelectorComponent]
})
export class ExpensesModule { }
