import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lore-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass',
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent {

  @Input() lore!: string
  @Input() title!: string

}
