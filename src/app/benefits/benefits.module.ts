import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { BenefitsFilesSearchComponent } from './benefits-search.component';

const benefitsRoutes: Routes = [
  { path: '', component: BenefitsFilesSearchComponent }
];

@NgModule({
  declarations: [BenefitsFilesSearchComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(benefitsRoutes)
  ] // import MODULES
})
export class BenefitsModule {}
