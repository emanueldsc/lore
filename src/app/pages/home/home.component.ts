import { Component, inject, OnInit } from '@angular/core';
import { MansoryComponent } from '../../components/mansory/mansory.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { ActivatedRoute } from '@angular/router';
import { ContentLoaderService } from '../../services/content-loader.service';
import { FilterFieldComponent } from '../../components/filter-field/filter-field.component';
import { CardItem } from '../../models/CardItem.model';

@Component({
  selector: 'lore-home',
  standalone: true,
  imports: [
    MenuComponent,
    FilterFieldComponent,
    MansoryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomePageComponent implements OnInit {

  private activate = inject(ActivatedRoute)
  cards: CardItem[] = []

  constructor(
    private contentService: ContentLoaderService
  ) { }

  ngOnInit(): void {
    this.obterCards()
    this.activate.queryParamMap.subscribe(params => {
      const menuValue = params.get('menu')
      const filterValue = params.get('filter')
      const hasMenu = menuValue !== null && menuValue !== '';
      const hasFilter = filterValue !== null && filterValue !== '';

      // Se apenas 'menu' está presente e válido
      if (hasMenu && !hasFilter) {
        this.obterCards(item => item.type === menuValue);
      }

      // Se apenas 'filter' está presente e válido
      if (hasFilter && !hasMenu) {
        this.obterCards(item => item.title.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));
      }

      // Se ambos 'menu' e 'filter' estão presentes e válidos
      if (hasMenu && hasFilter) {
        this.obterCards(
          item => item.type === menuValue,
          item => item.title.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
        );
      }

      // Se ambos estão ausentes ou inválidos, chama obterCards sem filtros
      if (!hasMenu && !hasFilter) {
        this.obterCards();
      }

    })
  }

  obterCards(...filters: ((item: CardItem) => boolean)[]): void {
    this.contentService.getMarkdownLinks().subscribe(content => {
      this.cards = content.map(item => ({
        background: `${item.dir}/${item.imagens[0]}`,
        link: item.detail,
        type: item.type,
        title: item.name
      }))

      // Aplica os filtros apenas se algum filtro for passado
      if (filters.length > 0) {
        this.cards = this.cards.filter(card => filters.every(f => f(card)));
      }

    })
  }

}
