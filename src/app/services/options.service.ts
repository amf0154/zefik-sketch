import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  private optionsMap = new Map();
  constructor() { }

  setOption(key: string,data: any){
    this.optionsMap.set(key,data);
  }

  getOptions(key: string){
    const options = this.optionsMap.get(key);
    return options && options.length !== 0 ? options : [];
  }

  clearOptions(key: string){
    this.optionsMap.delete(key);
  }

}
