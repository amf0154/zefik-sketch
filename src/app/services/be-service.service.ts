import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class BeServiceService {

  private url: string;

  constructor(private http: HttpClient, private appConfig: AppConfig) { 
    this.url = this.appConfig.configObject.apiUris.businessEntities;
  }

  getDetails(id: any) : Observable<any> {
    return this.http.get(this.appConfig.configObject.apiUris.businessEntities + "/" + id + "/generalInfo", { headers: this.appConfig.headers } );
  }
}
