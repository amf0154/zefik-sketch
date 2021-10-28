import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../app-config.service';


@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private url: string;
  

  constructor(private http: HttpClient, private appConfig: AppConfig) { 
    this.url = this.appConfig.configObject.apiUris.billing;
  }

  getBillingData(params: any) : Observable<any> {
    return this.http.post(this.url + '/filter', params, { headers: this.appConfig.headers });
  }

  getLastStatementByBeId(beId: any) : Observable<any> {
    return this.http.get(this.url + '/getLastStatement?beId='+ beId);
  }

  getLastStatementByStatementId(statementId: any) : Observable<any> {
      return this.http.get(this.url + '/getLastStatement?statementId='+ statementId);
  }

  exportExcel(params: any) : Observable<any> {
      return this.http.post(this.url + '/exports/excel', params, { responseType: 'arraybuffer',headers: this.appConfig.headers });
  }

  emailExcel(params: any) : Observable<any> {
      return this.http.post(this.url + '/exports/email', params, { headers: this.appConfig.headers });
  }

  pay(params: any) : Observable<any> {
      return this.http.post(this.url + '/pay',params);
  }
}
