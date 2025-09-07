import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yeshunweb';
  private touchStartX: number = 0;

  // 監聽 touchstart 事件，記錄觸摸起始位置
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  // 監聽 touchmove 事件，防止邊緣滑動
  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    const touchCurrentX = event.touches[0].clientX;
    const deltaX = touchCurrentX - this.touchStartX;

    // 當從左邊緣右滑（正向滑動）或右邊緣左滑（負向滑動）時，阻止預設行為
    if (
      (this.touchStartX < 50 && deltaX > 0) || // 左邊緣右滑
      (this.touchStartX > window.innerWidth - 50 && deltaX < 0) // 右邊緣左滑
    ) {
      event.preventDefault();
    }
  }
}
