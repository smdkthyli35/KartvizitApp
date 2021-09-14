import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardItem = {
    title:'Fullstack Developer',
    name:'Samed Kütahyalı',
    phone:'0599 999 9999',
    email:'samedkutahyali19@gmail.com',
    address:'Bornova / İZMİR'
  };

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openAddCardModal(): void {
    this.dialog.open(CardModalComponent, {
      width:'400px'
    });
  }
}
