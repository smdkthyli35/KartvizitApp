import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards!: Card[];
  filteredCards!:Card[];
  
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient:HttpClient
    ) { }

  getCards(): void {
    this.httpClient.get<Card[]>(this.apiUrl + '/cards')
    .subscribe((res:Card[])=>{
      this.cards = this.filteredCards = res;
    });
  }

  addCard(card:Card) : Observable<any> {
    return this.httpClient.post(this.apiUrl + '/cards', card);
  }

  updateCard(card:Card, cardId:number) : Observable<any>{
    return this.httpClient.put(this.apiUrl + '/cards/' + cardId,card);
  }

  deleteCard(cardId:number) : Observable<any>{
    return this.httpClient.delete(this.apiUrl + '/cards/' + cardId);
  }

}
