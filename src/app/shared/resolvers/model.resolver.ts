import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Model } from '../interfaces/model';
import { ModelsService } from '../services/model.service';
import { RootService } from '../services/root.service';

@Injectable({
  providedIn: 'root'
})
export class ModelResolver implements Resolve<Model> {
  constructor(
    private root: RootService,
    private router: Router,
    private model: ModelsService,
) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Model> {
    const model_no = route.params.model_no || route.data.model_no;

        return this.model.getModel(model_no).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse && error.status === 404) {
                    this.router.navigate([this.root.notFound()]).then();
                }

                return EMPTY;
            })
        );
    }   
}
