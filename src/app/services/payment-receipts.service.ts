import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentReceiptsService {

  constructor(private http: HttpClient, private appConfig: AppConfig) { 
    
  }

  getFilteredEntities(params: any): Observable<any> {
    return this.http.post(this.appConfig.configObject.apiServiceBaseUri + 'payment/receipts/filter', params, { headers: this.appConfig.headers });
  }

  exportExcel(params: any): Observable<any>{
    return this.http.post(this.appConfig.configObject.apiServiceBaseUri + 'payment/exports/excel', params, { responseType: 'arraybuffer',headers: this.appConfig.headers });
  }
  
  emailExcel(params: any): Observable<any> {
    return this.http.post(this.appConfig.configObject.apiServiceBaseUri + 'payment/exports/email', params,{ headers: this.appConfig.headers });
  }

  getPdfLink(id: any): Observable<any>  {
    return this.http.get(this.appConfig.configObject.apiUris.payment + '/' + id +'/uri', { headers: this.appConfig.headers })
  }
}
