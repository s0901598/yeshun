import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-testfilp',
  templateUrl: './testfilp.component.html',
  styleUrls: ['./testfilp.component.css'],
   animations: [
    trigger('flipLeft', [
      state('front', style({ transform: 'rotateY(0deg)' })),
      state('back', style({ transform: 'rotateY(-180deg)' })),
      transition('front <=> back', animate('0.6s ease-in-out')) // 動畫時間延長到 1 秒
    ]),
    trigger('flipRight', [
      state('front', style({ transform: 'rotateY(0deg)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front <=> back', animate('0.6s ease-in-out')) // 動畫時間延長到 1 秒
    ])
  ]
})
export class TestfilpComponent implements OnInit {
  // 相冊頁面陣列，每頁是物件（front: 前頁內容, back: 後頁內容，可以是圖片 URL）
  pages = [
     '/assets/images/navbg02.jpg',
    '/assets/images/navbg05.jpg' ,
   '/assets/images/navbg06.jpg',
    '/assets/images/navbg07.jpg' 
    // 添加更多頁...
  ];

  currentPageIndex = 0;    // 當前頁索引（左頁）
  isSinglePage = true;     // 是否顯示單頁（初始為 true）
  leftFlipState = 'front'; // 左頁翻轉狀態
  rightFlipState = 'back'; // 右頁翻轉狀態
  isDragging = false;      // 是否正在拖曳
  startX = 0;              // 拖曳起始 X 位置
  dragDelta = 0;           // 拖曳距離
  isFlipping = false;      // 是否正在翻頁（防止連續觸發）


  // 輪滾事件：下滑翻下一頁，上滑翻上一頁
  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault();
    if (this.isFlipping) return; // 正在翻頁時忽略新事件

    // 過濾弱滾動事件（降低敏感度）
    if (Math.abs(event.deltaY) < 5) return; // 忽略小於 50 的滾動

    this.isFlipping = true;
    setTimeout(() => {
      this.isFlipping = false; // 動畫完成後重置
    }, 1000); // 防抖時間延長到 1000ms

    if (event.deltaY > 0) {
      this.nextPage();
    } else if (event.deltaY < 0) {
      this.prevPage();
    }
  }
  // 滑鼠按下開始拖曳
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (this.isFlipping) return; // 正在翻頁時不允許拖曳
    this.isDragging = true;
    this.startX = event.clientX;
    this.dragDelta = 0;
  }

  // 滑鼠移動：根據拖曳距離動態旋轉
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.dragDelta = this.startX - event.clientX; // 向左拖曳正值（翻下一頁）
      const rotation = Math.min(180, Math.max(-180, this.dragDelta / 2));
      const leftPage = document.querySelector('.left-page-container') as HTMLElement;
      const rightPage = document.querySelector('.right-page-container') as HTMLElement;
      if (this.dragDelta > 0 && rightPage) {
        rightPage.style.transform = `rotateY(${180 - rotation}deg)`;
      } else if (this.dragDelta < 0 && leftPage) {
        leftPage.style.transform = `rotateY(${rotation}deg)`;
      }
    }
  }
 // 滑鼠放開：根據距離決定翻頁或回彈
  @HostListener('mouseup')
  @HostListener('mouseleave')
  onMouseUp() {
    if (this.isDragging) {
      this.isDragging = false;
      const leftPage = document.querySelector('.left-page-container') as HTMLElement;
      const rightPage = document.querySelector('.right-page-container') as HTMLElement;
      if (leftPage) leftPage.style.transform = '';
      if (rightPage) rightPage.style.transform = '';
      if (Math.abs(this.dragDelta) > 100) {
        this.isFlipping = true;
        setTimeout(() => {
          this.isFlipping = false;
        }, 1000); // 防抖時間與動畫一致
        if (this.dragDelta > 0) {
          this.nextPage();
        } else {
          this.prevPage();
        }
      } else {
        this.leftFlipState = 'front';
        this.rightFlipState = 'back';
      }
    }
  }
    nextPage() {
      if (this.currentPageIndex < this.pages.length - 1) {
        this.isSinglePage = false;
        this.rightFlipState = this.rightFlipState === 'back' ? 'front' : 'back';
        setTimeout(() => {
          this.currentPageIndex++;
          this.leftFlipState = 'front';
          this.rightFlipState = 'back';
          this.cdr.detectChanges();
        }, 200);
      }
    }

    prevPage() {
  if (this.currentPageIndex > 0) {
    this.leftFlipState = this.leftFlipState === 'front' ? 'back' : 'front';
    setTimeout(() => {
      this.currentPageIndex--;
      this.leftFlipState = 'front';
      this.rightFlipState = 'back';
      if (this.currentPageIndex === 0) {
        this.isSinglePage = true;
      }
      this.cdr.detectChanges();
    }, 200);
  }
}
 // 獲取左頁圖片
  getLeftPage() {
    // 當從第一頁翻到第二頁時，左頁應顯示第一頁
    if (this.currentPageIndex === 1 && !this.isSinglePage) {
      return this.pages[0];
    }
    return this.pages[this.currentPageIndex];
  }

  // 獲取右頁圖片（如果有）
  getRightPage() {
    // 當從第一頁翻到第二頁時，右頁顯示第二頁
    if (this.currentPageIndex === 1 && !this.isSinglePage) {
      return this.pages[1];
    }
    return this.currentPageIndex + 1 < this.pages.length ? this.pages[this.currentPageIndex + 1] : null;
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
