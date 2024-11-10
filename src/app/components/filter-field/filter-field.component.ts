import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lore-filter-field',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './filter-field.component.html',
  styleUrl: './filter-field.component.sass'
})
export class FilterFieldComponent implements OnInit {

  private router = inject(Router)
  private active = inject(ActivatedRoute)
  searchTerm: string = '';

  ngOnInit(): void {
    this.active.queryParamMap.subscribe(params => {
      const filter = params.get('filter')
      if (typeof filter === 'string' && filter !== this.searchTerm) {
        this.searchTerm = filter
      }
    })
  }

  onSearch() {
    this.router.navigate([], {
      queryParams: { filter: this.searchTerm },
      queryParamsHandling: 'merge'
    })
  }
}
