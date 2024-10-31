import { Component } from '@angular/core';
import { CalculatorService } from '../../calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  template: `<h1>The total is {{ totalCost }}</h1>`,
})
export class CalculatorComponent {
  constructor(private calculatorSerivce: CalculatorService) {}

  totalCost = this.calculatorSerivce.add(50, 25);
}
