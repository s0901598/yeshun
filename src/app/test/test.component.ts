import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild,HostListener } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  

  ngOnInit(): void {}
  panels = ['Panel 1', 'Panel 2', 'Panel 3', 'Panel 4', 'Panel 5'];
  currentIndex = 0;
  panelCount = 5;
  isScrolling = false;
  scrollAccumulator = 0;
  scrollThreshold = 100;

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault();

    if (this.isScrolling) return;

    this.scrollAccumulator += event.deltaY;

    if (Math.abs(this.scrollAccumulator) >= this.scrollThreshold) {
      if (this.scrollAccumulator > 0 && this.currentIndex < this.panelCount - 1) {
        this.currentIndex++;
        this.isScrolling = true;
      } else if (this.scrollAccumulator < 0 && this.currentIndex > 0) {
        this.currentIndex--;
        this.isScrolling = true;
      }

      this.scrollAccumulator = 0;

      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    }
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

}
