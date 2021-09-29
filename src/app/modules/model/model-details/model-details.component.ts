import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Model } from 'src/app/shared/interfaces/model';
import { ModelsService } from 'src/app/shared/services/model.service';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss']
})
export class ModelDetailsComponent implements OnInit {

  relatedModels$!: any;

  model!: Model;
  layout: 'standard'|'columnar'|'sidebar' = 'standard';
  sidebarPosition: 'start'|'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"

  constructor(
      private modelProf: ModelsService,
      private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
      this.route.data.subscribe(data => {
          this.layout = data.layout || this.layout;
          this.sidebarPosition = data.sidebarPosition || this.sidebarPosition;
          this.model = data.model;

          this.relatedModels$ = this.modelProf.getModels(data.model);
      });
  }
}
