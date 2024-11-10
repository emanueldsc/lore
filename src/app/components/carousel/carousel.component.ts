import { Component, Input, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'lore-carousel[images]',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.sass'
})
export class CarouselComponent implements OnInit, OnDestroy {

  @Input() images!: string[]
  currentIndex = 0
  animateOut = false
  animateIn = false
  private intervalId: any

  ngOnInit(): void {
    if (this.images.length > 1) {
      this.startAutoSlide()
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide()
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next()
    }, 10000)
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  prev() {
    this.startSlideAnimation(() => {
      this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1
    })
  }

  next() {
    this.startSlideAnimation(() => {
      this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0
    })
  }

  startSlideAnimation(updateIndex: () => void) {
    this.animateOut = true
    setTimeout(() => {
      updateIndex()
      this.animateOut = false
      this.animateIn = true
    }, 1000)
  }

  onAnimationEnd() {
    this.animateIn = false
  }
}
