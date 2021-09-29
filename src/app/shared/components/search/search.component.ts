import {
  Component,
  ElementRef, EventEmitter,
  HostBinding,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit, Output,
  ViewChild
} from '@angular/core';
import { RootService } from '../../services/root.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, map, switchMap, takeUntil, throttleTime } from 'rxjs/operators';
import { fromEvent, of, Subject, asyncScheduler } from 'rxjs';
import { DOCUMENT } from '@angular/common';

export type SearchLocation = 'header' | 'indicator' | 'mobile-header';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  exportAs: 'search',
})
export class SearchComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  categories: any;

  form!: FormGroup;

  hasSuggestions = false;

  @Input() location: SearchLocation = 'header';

  @Output() escape: EventEmitter<void> = new EventEmitter<void>();

  @Output() closeButtonClick: EventEmitter<void> = new EventEmitter<void>();

  @HostBinding('class.search') classSearch = true;

  @HostBinding('class.search--location--header') get classSearchLocationHeader(): boolean { return this.location === 'header'; }

  @HostBinding('class.search--location--indicator') get classSearchLocationIndicator(): boolean { return this.location === 'indicator'; }

  @HostBinding('class.search--location--mobile-header') get classSearchLocationMobileHeader(): boolean { return this.location === 'mobile-header'; }

  @HostBinding('class.search--has-suggestions') get classSearchHasSuggestions(): boolean { return this.hasSuggestions; }

  @HostBinding('class.search--suggestions-open') classSearchSuggestionsOpen = false;

  @ViewChild('input') inputElementRef!: ElementRef;

  get element(): HTMLElement { return this.elementRef.nativeElement; }

  get inputElement(): HTMLElement { return this.inputElementRef.nativeElement; }

  constructor(
      @Inject(DOCUMENT) private document: Document,
      private fb: FormBuilder,
      private elementRef: ElementRef,
      private zone: NgZone,
      public root: RootService,
  ) { }


  ngOnInit(): void {
      this.form = this.fb.group({
          category: ['all'],
          query: [''],
      });

      this.zone.runOutsideAngular(() => {
          fromEvent(this.document, 'click').pipe(
              takeUntil(this.destroy$),
          ).subscribe(event => {
              const activeElement = this.document.activeElement;

              // If the inner element still has focus, ignore the click.
              if (activeElement && activeElement.closest('.search') === this.element) {
                  return;
              }

              // Close suggestion if click performed outside of component.
              if (event.target instanceof HTMLElement && this.element !== event.target.closest('.search')) {
                  this.zone.run(() => this.closeSuggestion());
              }
          });

          fromEvent(this.element, 'focusout').pipe(
              debounceTime(10),
              takeUntil(this.destroy$),
          ).subscribe(() => {
              if (this.document.activeElement === this.document.body) {
                  return;
              }

              // Close suggestions if the focus received an external element.
              if (this.document.activeElement && this.document.activeElement.closest('.search') !== this.element) {
                  this.zone.run(() => this.closeSuggestion());
              }
          });
      });
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

  openSuggestion(): void {
      this.classSearchSuggestionsOpen = true;
  }

  closeSuggestion(): void {
      this.classSearchSuggestionsOpen = false;
  }


}
