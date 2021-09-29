import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-features',
  templateUrl: './block-features.component.html',
  styleUrls: ['./block-features.component.scss']
})
export class BlockFeaturesComponent implements OnInit {

  @Input() layout: 'classic'|'boxed' = 'classic';

  constructor() { }

  ngOnInit(): void {
  }

}
