import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelResolver } from 'src/app/shared/resolvers/model.resolver';
import { ModelDetailsComponent } from './model-details/model-details.component';

const routes: Routes = [
  {
    path: 'models/:model_no',
    component: ModelDetailsComponent,
    data: {
        layout: 'standard',
        sidebarPosition: 'start'
    },
    resolve: {
        model: ModelResolver
    },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule {}
