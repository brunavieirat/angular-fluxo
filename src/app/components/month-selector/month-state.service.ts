import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthStateService {
  private mesSelecionadoSubject = new BehaviorSubject<number>(new Date().getMonth());
  mesSelecionado$ = this.mesSelecionadoSubject.asObservable();

  private mesAnoSelecionadoSubject = new BehaviorSubject<string>('');
  mesAnoSelecionadoSubject$ = this.mesAnoSelecionadoSubject.asObservable();

  constructor() { }

  setMesSelecionado(mes: number): void {
    this.mesSelecionadoSubject.next(mes);
  }

  getMesSelecionado(): number {
    return this.mesSelecionadoSubject.getValue();
  }

  setMesValue(value: string) {
    this.mesAnoSelecionadoSubject.next(value)
    }

  getMesValue(): string {
    return this.mesAnoSelecionadoSubject.getValue();

  }
}
