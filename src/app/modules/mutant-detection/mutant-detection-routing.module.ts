import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MutantDetectionComponent } from './mutant-detection.component';


const routes: Routes = [
  {
    path: '',
    component: MutantDetectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MutantDetectionRoutingModule { }
