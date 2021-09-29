import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MobileMenuItem } from 'src/app/shared/interfaces/mobile-menu-items';
import { MobileMenuService } from 'src/app/shared/services/mobile-menu.service';
import { mobileMenu } from 'src/data/mobile-menu';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnDestroy, OnInit {
  private destroy$: Subject<any> = new Subject();

  isOpen = false;
  links: MobileMenuItem[] = mobileMenu;

  constructor(public mobilemenu: MobileMenuService) { }

  ngOnInit(): void {
      this.mobilemenu.isOpen$.pipe(takeUntil(this.destroy$)).subscribe(isOpen => this.isOpen = isOpen);
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

  onItemClick(event: MobileMenuItem): void {
      if (event.type === 'link') {
          this.mobilemenu.close();
      }
  }

}
