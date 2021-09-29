import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Globals } from "src/app/globals";
import { Model } from "../interfaces/model";

export interface ListOptions {
    page?: number;
    limit?: number;
    sort?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ModelsService { 
    // noinspection JSUnusedLocalSymbols
    constructor(
        private http: HttpClient,
        private global: Globals
    ) { }

    uploadPhoto(file: any){
      const formData = new FormData();

      formData.append('model_id', file.model_id)
      formData.append('picture', file.picture)

      return this.http.post(this.global._BaseUri + '/v1/model/profile/add-picture', formData);

    }

    getPhotos(model_id: number){
      return this.http.get(this.global._BaseUri + `/v1/model/profile/get-pictures/${model_id}`)
                      .pipe(map((data: any) => data), shareReplay())
    }

    addModel(data: any) {
        return this.http.post(this.global._BaseUri + '/users/add', data);
      }
      
      getModels(subscription: string): Observable<Model> {
        return this.http.get<Model>(this.global._BaseUri + `/v1/models/${subscription}`)
                        .pipe(map((data: any) => data.model), shareReplay());
      }

      getcity() {
        return this.http.get(this.global._BaseUri + `/v1/cities`)
                        .pipe(map((data: any) => data), shareReplay());
      }

      getFilteredVipModels(city_id: number): Observable<Model> {
        return this.http.get<Model>(this.global._BaseUri + `/v1/models/vip/city/${city_id}`)
                        .pipe(map((data: any) => data.model), shareReplay());
      }

      getFilteredRglModels(city_id: number): Observable<Model> {
        return this.http.get<Model>(this.global._BaseUri + `/v1/models/regular/city/${city_id}`)
                        .pipe(map((data: any) => data.model), shareReplay());
      }
      
      getServices(): Observable<Model> {
        return this.http.get<Model>(this.global._BaseUri + `/v1/services`).pipe(map((data: any) => data.services), shareReplay());
      }

      getAvailabilities(): Observable<any> {
        return this.http.get<any>(this.global._BaseUri + `/v1/availabilities`).pipe(map((data: any) => data), shareReplay());
      }

      getModelAvailability(model_id: number): Observable<any> {
        return this.http.get<any>(this.global._BaseUri + `/v1/model/get-availabilities/${model_id}`).pipe(map((data: any) => data), shareReplay());
      }

      addModelAvailability(data: any){
        return this.http.post(this.global._BaseUri + `/v1/model/profile/add-availabilities`, data)
      }

      
      getModel(model_no: number) {
        return this.http.get(this.global._BaseUri + `/v1/model/profile/${model_no}`).pipe(map((data: any) => data), shareReplay());
      }
      
      getModelSubscription(model_no: number) {
        return this.http.get(this.global._BaseUri + `/v1/model/get-subscriptions/${model_no}`).pipe(map((data: any) => data.model[0]), shareReplay());
      }
      
      getModelServices(model_no: number) {
        return this.http.get(this.global._BaseUri + `/v1/model/get-services/${model_no}`).pipe(map((data: any) => data), shareReplay());
      }
      
      addModelServices(data: any){
        return this.http.post(this.global._BaseUri + `/v1/model/profile/add-services`, data)
      }
      
      updateModel(model_no: number, data: any){
        return this.http.post(this.global._BaseUri + `/v1/model/profile/update/${model_no}`, data)
      }
      

    }    