import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseComponent } from './components/expenses/expense.component';
import { ExpensesModule } from './components/expenses/expenses.module';
import { MonthStateService } from './components/month-selector/month-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpensesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-fluxo-de-caixa';
  mesSelecionado: number | undefined;

  constructor(private monthStateService: MonthStateService) { 
    
  }

  ngOnInit(): void {
    this.monthStateService.mesSelecionado$.subscribe(mes => {
      this.mesSelecionado = mes;
    });
  }
}
