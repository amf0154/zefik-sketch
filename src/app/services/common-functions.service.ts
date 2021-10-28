import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor() { }

  getCardImage(name: any,showName: any = false,getLinkOnly: any = false): string {
    const hasSuchCard = (['american express','discover','genric','mastercard','visa']
    .includes(name.toLocaleLowerCase()));
    const imageElement = `<img src='/assets/cards/${name.toLocaleLowerCase().replaceAll(" ","")}.svg' width="35" alt='card type'>`;
    const cardTitle = showName ? ' ' + name : '';
    return (getLinkOnly && hasSuchCard) ? `/assets/cards/${name.toLocaleLowerCase().replaceAll(" ","")}.svg` : (hasSuchCard ? imageElement + cardTitle : name)
  }
}
