import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MobileMenuItem } from 'src/app/shared/interfaces/mobile-menu-items';

@Component({
  selector: 'app-mobile-links',
  templateUrl: './mobile-links.component.html',
  styleUrls: ['./mobile-links.component.scss']
})
export class MobileLinksComponent {
  @Input() links: MobileMenuItem[] = [];
  @Input() level = 0;

  @Output() itemClick: EventEmitter<MobileMenuItem> = new EventEmitter();

  constructor() { }

  onItemClick(item: MobileMenuItem): void {
      this.itemClick.emit(item);
  }

}
