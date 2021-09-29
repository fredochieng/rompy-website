
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {shareReplay, map, retry} from 'rxjs/operators';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Globals } from 'src/app/globals';
import { Login } from '../interfaces/login';
import { Model } from '../interfaces/model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'token';

  // user information
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(private http: HttpClient, private global: Globals) {
    
    this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userContext') || '{}'));
    this.user = this.userSubject.asObservable();
  }


public get UserSub(): any {
  return this.userSubject;
}

  public get userValue(): any {
    return this.userSubject.value;
}

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
    // return !this.helper.isTokenExpired(token);
  }


  createPassword(user: any) {
    return this.http.post<any>(this.global._BaseUri + '/users/confirmemail' , user);
 }

 addModel(data: any) {
  return this.http.post(this.global._BaseUri + '/users/add', data);
}

getModels(subscription: string): Observable<Model> {
  return this.http.get<Model>(this.global._BaseUri + `/v1/models/${subscription}`)
                  .pipe(map((data: any) => data.model), shareReplay());
}

getServices(): Observable<Model> {
  return this.http.get<Model>(this.global._BaseUri + `/v1/services`).pipe(map((data: any) => data.services), shareReplay());
}

getModel(id: number) {
  return this.http.get(this.global._BaseUri + `/v1/model/profile/${id}`).pipe(map((data: any) => data.model[0]), shareReplay());
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

  loginUser(user: Login) {
    return this.http.post<any>(this.global._BaseUri + '/v1/login', user)
           .pipe(map(res => {
              if (res && res.auth_success_response) {
                const currentUser = {'name': res.user_object.name, 'email': res.user_object.email, 'id': res.user_object.id, 'model_no':res.user_object.model_no };
                const expiresAt = moment().add(res.expires, 'second');
                localStorage.setItem('JWT_TOKEN', res.auth_success_response);
                localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
                localStorage.setItem('userContext', JSON.stringify(currentUser));
                this.userSubject.next(res.user_object);
              }
              return res;
            }),
             shareReplay(),
            );
  }

  changePassword(data: any) {
     return this.http.post<any>(this.global._BaseUri + '/v1/model/change-password', data);
  }

  logout() {
    localStorage.removeItem('JWT_TOKEN');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('userContext');
  }

  getJwtToken() {
    return localStorage.getItem('JWT_TOKEN');
  }


}
