import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelRoutingModule } from './model-routing.module';
import { PageModelComponent } from './page-model/page-model.component';
import { ModelDetailsComponent } from './model-details/model-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

 
@NgModule({
  declarations: [
    ModelDetailsComponent,
    PageModelComponent,
  
  ],
  imports: [
    CommonModule,
    ModelRoutingModule,
    SharedModule
  ], 
  exports: [
   
  ]
})
export class ModelModule { }
