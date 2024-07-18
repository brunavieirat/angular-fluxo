import { Component, OnInit } from '@angular/core';
import { MonthStateService } from '../month-selector/month-state.service';
import { ExpenseService } from '../expenses/expense.service';

@Component({
  selector: 'app-calculations',
  standalone: true,
  imports: [],
  templateUrl: './calculations.component.html',
  styleUrl: './calculations.component.css'
})
export class CalculationsComponent implements OnInit{
  month$;
  expense$;


  constructor(private monthService: MonthStateService, private expenseService: ExpenseService) { 

    this.expense$ = this.expenseService.getExpenses();
    this.month$ = this.monthService.getMesValue();
  }

  ngOnInit(): void {
    
  }
}
