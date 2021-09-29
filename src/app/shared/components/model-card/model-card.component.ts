import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Model } from '../../interfaces/model';
import { RootService } from '../../services/root.service';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelCardComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject();

    @Input() model!: any;
    @Input() layout: 'grid-sm'|'grid-nl'|'grid-lg'|'list'|'horizontal'|null = null;
  
    
    constructor(
        private cd: ChangeDetectorRef,
        public root: RootService,
    ) { }
  
    ngOnInit(): void {
       
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('model' in changes) {
            // this.featuredAttributes = !this.model ? [] : this.model.attributes.filter(x => x.featured);
        }
    }
  
  
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

  
   
}
