import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/MenuItem.model';
import { CommonModule } from '@angular/common';
import { getTypeCardLabel } from '../../models/TypeCard.enum';

@Component({
  selector: 'lore-card-menu[item]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-menu.component.html',
  styleUrl: './card-menu.component.sass'
})
export class CardMenuComponent {

  @Input() item!: MenuItem

  get label() {
    return getTypeCardLabel('pt', 'menu', this.item.type)
  }

}
