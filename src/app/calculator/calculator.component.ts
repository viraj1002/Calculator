import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  expression: string = '';
  buttons: string[] = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'AC', 'DEL', 'sin', 'cos',
    'tan', 'log', 'x^2', 'x^3',
    'x^y', '√x', '∛x'
  ];

  onButtonClick(button: string): void {
    switch (button) {
      case '=':
        try {
          this.expression = eval(this.expression);
        } catch (error) {
          this.expression = 'Error';
        }
        break;
      case 'AC':
        this.expression = '';
        break;
      case 'DEL':
        this.expression = this.expression.slice(0, -1);
        break;
      case 'sin':
        this.expression = Math.sin(eval(this.expression)).toString();
        break;
      case 'cos':
        this.expression = Math.cos(eval(this.expression)).toString();
        break;
      case 'tan':
        this.expression = Math.tan(eval(this.expression)).toString();
        break;
      case 'log':
        this.expression = Math.log10(eval(this.expression)).toString();
        break;
      case 'x^2':
        this.expression = Math.pow(eval(this.expression), 2).toString();
        break;
      case 'x^3':
        this.expression = Math.pow(eval(this.expression), 3).toString();
        break;
      case 'x^y':
        this.expression = '';
        break; // Implement x^y as needed
      case '√x':
        this.expression = Math.sqrt(eval(this.expression)).toString();
        break;
      case '∛x':
        this.expression = Math.cbrt(eval(this.expression)).toString();
        break;
      default:
        this.expression += button;
    }
  }
}