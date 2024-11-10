import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardItem } from '../../models/CardItem.model';
import { getTypeCardLabel } from '../../models/TypeCard.enum';

@Component({
  selector: 'lore-card[item]',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  @Input() item!: CardItem

  get title(): string {
    const type = getTypeCardLabel('pt', 'card', this.item.type)
    return `${type} - ${this.item.title}`
  }
}
