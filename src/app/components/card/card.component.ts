import { Component, Input } from '@angular/core';
import { Personaje } from 'src/interfaces/personaje';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() personaje!: Personaje;

  constructor() { }

}
