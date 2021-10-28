import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {

  constructor(private http: HttpClient, private appConfig: AppConfig) { 
    
  }

  getAllPaymentMethods(page: any, count: any, search: any = ''): Observable<any> {
    return this.http.get(this.appConfig.configObject.apiUris.cards + "/" + "getAllWithPaging?page=" + page + "&countPerPage=" + count + "&search=" + search, { headers: this.appConfig.headers });
  }

  getPaymentMethods(beId: any): Observable<any> {
    return this.http.get(this.appConfig.configObject.apiUris.cards + "/", { params: { beId: beId }, headers: this.appConfig.headers });
  }

}
