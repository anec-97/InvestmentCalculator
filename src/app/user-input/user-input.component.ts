import { Component, EventEmitter, Output } from '@angular/core';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  entedInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  constructor(private investmentService: InvestmentService) {}
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.entedInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
    });
  }
}
