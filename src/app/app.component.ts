<<<<<<< HEAD
import { Component, HostListener } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 3171bd72e12734f23e4d4184de0ec4af3c12780a

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadingmask:boolean = true;
  title = 'yeshunweb';
<<<<<<< HEAD
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
=======
   ngOnInit(): void {
      setTimeout(()=> {
        this.loadingmask = false;
        document.body.style.overflow = 'auto'
      },5000);
>>>>>>> 3171bd72e12734f23e4d4184de0ec4af3c12780a
  }
}
