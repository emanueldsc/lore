import { CommonModule } from '@angular/common'
import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'lore-tabs[stats]',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.sass',
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent {

  private _stats: { [key: string]: { [key: string]: string } } = {}
  selectedTab: string = ''

  @Input() set stats(sts: { [key: string]: { [key: string]: string } }) {
    this._stats = sts
    if (Object.keys(this._stats).length > 0) {
      this.selectedTab = this.statKeys[0]
    }
  }

  get stats() {
    return this._stats 
  }


  get statKeys() {
    return Object.keys(this._stats)
  }

  selectTab(tab: string) {
    this.selectedTab = tab
  }

  objectKeys(obj: { [key: string]: string }) {
    return Object.keys(obj)
  }

}
