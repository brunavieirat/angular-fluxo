import { Component, OnInit } from '@angular/core';
import { MonthStateService } from './month-state.service';

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.css']
})
export class MonthSelectorComponent implements OnInit {
  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  ano: number = new Date().getFullYear();
  mesIndex: number = new Date().getMonth();

  constructor(private monthStateService: MonthStateService) { }

  ngOnInit(): void {
    this.mesIndex = this.monthStateService.getMesSelecionado();
  }

  proximoMes(): void {
    this.mesIndex++;
    if (this.mesIndex === 12) {
      this.mesIndex = 0;
      this.ano++;
    }
    this.atualizarMesSelecionado();
  }

  mesAnterior(): void {
    this.mesIndex--;
    if (this.mesIndex === -1) {
      this.mesIndex = 11;
      this.ano--;
    }
    this.atualizarMesSelecionado();
  }

  atualizarMesSelecionado(): void {
    this.monthStateService.setMesSelecionado(this.mesIndex);
    this.monthStateService.setMesValue(this.mesAtual);
  }

  get mesAtual(): string {
    return `${this.meses[this.mesIndex]}/${this.ano}`;
  }
}
