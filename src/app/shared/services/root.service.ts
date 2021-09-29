import { Injectable } from '@angular/core';
import { Model } from '../interfaces/model';

@Injectable({
    providedIn: 'root'
})
export class RootService {
    constructor() { }

    home(): string {
        return '/';
    }

    // noinspection JSUnusedLocalSymbols

    login(): string {
        return '/account/login';
    }

    model(model: Partial<Model>): string {
        const basePath = '/escort/models';
        return `${basePath}/${model.model_no}`
    }

    terms(): string {
        return '/site/terms';
    }

    notFound(): string {
        return `/site/not-found`;
    }
}
