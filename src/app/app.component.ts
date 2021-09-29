import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { filter, first } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private router: Router,
        private toastr: ToastrService,
        private zone: NgZone,
        private scroller: ViewportScroller,
    ) {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                this.router.events.pipe(filter(event => event instanceof NavigationEnd), first()).subscribe(() => {
                    const preloader = document.querySelector('.site-preloader');

                    if (preloader === null) {
                        return;
                    }

                    preloader.addEventListener('transitionend', (event: Event) => {
                        if (event instanceof TransitionEvent && event.propertyName === 'opacity') {
                            preloader.remove();
                        }
                    });
                    preloader.classList.add('site-preloader__fade');

                    // Sometimes, due to unexpected behavior, the browser (in particular Safari) may not play the transition, which leads
                    // to blocking interaction with page elements due to the fact that the preloader is not deleted.
                    // The following block covers this case.
                    if (getComputedStyle(preloader).opacity === '0' && preloader.parentNode) {
                        preloader.parentNode.removeChild(preloader);
                    }
                });
            });
        }
    }

    ngOnInit(): void {

        this.router.events.subscribe((event) => {
            if ((event instanceof NavigationEnd)) {
                this.scroller.scrollToPosition([0, 0]);
            }
        });
        
    }
}
