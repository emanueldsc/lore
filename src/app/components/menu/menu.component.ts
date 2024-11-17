import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from '../../models/MenuItem.model';
import { CardMenuComponent } from '../card-menu/card-menu.component';
import { first, take } from 'rxjs';
import { TypeCard, TypeCardCategory } from '../../models/TypeCard.enum';

@Component({
  selector: 'lore-menu',
  standalone: true,
  imports: [
    CardMenuComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent {

  private router = inject(Router)
  private activate = inject(ActivatedRoute)

  menuLabel(label: TypeCardCategory): string {
    return TypeCard['pt'].menu[label]
  }

  selecionarItemMenu(item: MenuItem): void {
    this.configureItemMenu(item)
  }

  private configureItemMenu(item: MenuItem) {
    this.activate.queryParams.pipe(take(1)).subscribe(params => {
      let { menu } = params
      menu = item.type == menu ? '' : item.type
      this.selectAItem(menu as TypeCardCategory)
      this.router.navigate([], {
        queryParams: { menu, filter: '' },
        queryParamsHandling: 'merge'
      })
    })
  }

  private selectAItem(menu: TypeCardCategory): void {
    this.menu.forEach(item => item.selected = item.type === menu)
  }

  // esse atributo via ser recebido via parâmetro
  menu: MenuItem[] = [
    { type: 'adventures', background: 'assets/imgs/menu_adventure.jpeg', selected: false },
    { type: 'characters', background: 'assets/imgs/menu_characters.jpeg', selected: false },
    { type: 'creatures', background: 'assets/imgs/menu_creatures.jpeg', selected: false },
    { type: 'items', background: 'assets/imgs/menu_items.jpeg', selected: false },
    { type: 'lands', background: 'assets/imgs/menu_lands.jpeg', selected: false },
    { type: 'magics', background: 'assets/imgs/menu_magics.jpeg', selected: false },
    { type: 'professions', background: 'assets/imgs/jobs.jpg', selected: false }
  ]

}