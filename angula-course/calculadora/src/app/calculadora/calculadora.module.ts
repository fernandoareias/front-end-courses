import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';

@NgModule({
  exports: [CalculadoraComponent],
  declarations: [CalculadoraComponent],
  imports: [CommonModule],
})
export class CalculadoraModule {}
