import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {

  constructor() { }

  safeCopy(src: any, dest: any) {
    Object.keys(dest).forEach(function (key) {
        if (!src.hasOwnProperty(key)) {
            src[key] = dest[key];
        }
    });
    return src;
  }
}
