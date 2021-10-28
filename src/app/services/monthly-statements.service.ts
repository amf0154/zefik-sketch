import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { AppConfig } from '../app-config.service';


@Injectable({
  providedIn: 'root'
})
export class MonthlyStatementsService {

  private url: string;
  
  constructor(private http: HttpClient, private appConfig: AppConfig) { 
    this.url = this.appConfig.configObject.apiUris.monthlyStatements;
  }

  getMonthlyStatementsBilling(params: any, beId?: any): Observable<any> {
    // if(userService.isZefikUser() && beId !== ZEFIK_ID) {
    //     params.Filter.BusinessEntityId = beId;
    // }
    return this.http.post(this.url + '/filter', params, { headers: this.appConfig.headers });
  }

  exportExcel(params: any) : Observable<any> {
      return this.http.post(this.url + '/exports/excel', params, { responseType: 'arraybuffer',headers: this.appConfig.headers });
  }

  emailExcel(params: any) : Observable<any> {
      return this.http.post(this.url + '/exports/email', params, { headers: this.appConfig.headers });
  }

  getTotalbalance(params: any, beId?: any) : Observable<any> {
    // if(userService.isZefikUser() && beId !== ZEFIK_ID) {
    //     params.Filter.BusinessEntityId = beId;
    // }
    return this.http.post(this.url + '/totalOutstandingBalance', params, { headers: this.appConfig.headers });
  }
}

/*
monthlyStatements
zsnApp.factory("monthlyStatementsService", ["$http", "appConfig", "downloadFileService","userService","ZEFIK_ID", function ($http, appConfig, downloadFileService,userService, ZEFIK_ID) {
    var edittingPaymentMethod = {};
    var filters = {};
    var selectedStatements = [];
    var selectedBeId = userService.user.businessEntityId;
    var service = {
        getTotalbalance: function (params, beId) {
            if(userService.isZefikUser() && beId !== ZEFIK_ID) {
                params.Filter.BusinessEntityId = beId;
            }
            return $http.post(appConfig.apiServiceBaseUri + 'billingStatement/totalOutstandingBalance', params);
        },
        setSelectedStatements: (statements) => selectedStatements = statements,
        getSelectedStatements: () => selectedStatements,
    };

    return service;
}]); */
