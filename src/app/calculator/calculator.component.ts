// src/app/calculator/calculator.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  displayValue: string = '';
  history: string[] = [];
  showHistory: boolean = false;

  appendValue(value: string): void {
    this.displayValue += value;
  }

  clear(): void {
    this.displayValue = '';
  }

  calculate(): void {
    try {
      const result = eval(this.displayValue);
      this.history.push(`${this.displayValue} = ${result}`);
      this.displayValue = result.toString();
    } catch (e) {
      this.displayValue = 'Error';
    }
  }

  backspace(): void {
    if (this.displayValue.length > 0) {
      this.displayValue = this.displayValue.slice(0, -1);
    }
  }

  percentage(): void {
    try {
      const result = parseFloat(this.displayValue) / 100;
      this.history.push(`${this.displayValue}% = ${result}`);
      this.displayValue = result.toString();
    } catch (e) {
      this.displayValue = 'Error';
    }
  }

  squareRoot(): void {
    try {
      const result = Math.sqrt(parseFloat(this.displayValue));
      this.history.push(`√(${this.displayValue}) = ${result}`);
      this.displayValue = result.toString();
    } catch (e) {
      this.displayValue = 'Error';
    }
  }

  square(): void {
    try {
      const result = Math.pow(parseFloat(this.displayValue), 2);
      this.history.push(`${this.displayValue}² = ${result}`);
      this.displayValue = result.toString();
    } catch (e) {
      this.displayValue = 'Error';
    }
  }

  toggleHistory(): void {
    this.showHistory = !this.showHistory;
  }
  clearHistory(): void {
    this.history = [];
  }
}
