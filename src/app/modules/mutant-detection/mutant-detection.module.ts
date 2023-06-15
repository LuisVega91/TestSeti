import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutantDetectionRoutingModule } from './mutant-detection-routing.module';
import { MatButtonModule } from '@angular/material/button'
import { MutantDetectionComponent } from './mutant-detection.component';


@NgModule({
  declarations: [MutantDetectionComponent],
  imports: [
    CommonModule,
    MutantDetectionRoutingModule,
    MatButtonModule
  ] 
})
export class MutantDetectionModule { }
