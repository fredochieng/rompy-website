import { Component, Input, OnInit } from '@angular/core';
import { Model } from '../../interfaces/model';
import { RootService } from '../../services/root.service';

export type ProductLayout = 'standard' | 'sidebar' | 'columnar' | 'quickview';

@Component({
  selector: 'app-single-model',
  templateUrl: './single-model.component.html',
  styleUrls: ['./single-model.component.scss']
})
export class SingleModelComponent implements OnInit {

  @Input() layout: ProductLayout = 'standard';

    @Input() model!: Model;

  constructor(public root: RootService,) { }

  ngOnInit(): void {
  }

}
