import { animate, state, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
<<<<<<< HEAD
import { ChangeDetectorRef, Component, HostListener, OnInit, } from '@angular/core';
=======
import { Component, OnInit,HostListener, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
>>>>>>> 3171bd72e12734f23e4d4184de0ec4af3c12780a
import { ActivatedRoute } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-photodetail',
  templateUrl: './photodetail.component.html',
  styleUrls: ['./photodetail.component.css'],
  animations: [
      trigger('flipLeft', [
        state('front', style({ transform: 'rotateY(0deg)' })),
        state('back', style({ transform: 'rotateY(-180deg)' })),
        transition('front <=> back', animate('0.5s ease-in-out')) 
      ]),
      trigger('flipRight', [
        state('front', style({ transform: 'rotateY(0deg)' })),
        state('back', style({ transform: 'rotateY(180deg)' })),
        transition('front <=> back', animate('0.5s ease-in-out'))
      ])
    ]
})
export class PhotodetailComponent implements OnInit {



  selectedPhotos:any = null;
  photos = [
    {name:'住宅空間',
      photos:[
    { url: '/assets/images/navbg02.jpg', alt: 'Photo 1' },
    { url: '/assets/images/navbg03.jpg', alt: 'Photo 2' },
    { url: '/assets/images/navbg04.jpg', alt: 'Photo 3' },
    { url: '/assets/images/navbg05.jpg', alt: 'Photo 4' },
    ]
    },
    {name:'商業空間',
      photos:[
    { url: '/assets/images/navbg03.jpg', alt: 'Photo 1' },
    { url: '/assets/images/navbg04.jpg', alt: 'Photo 2' },
    { url: '/assets/images/navbg05.jpg', alt: 'Photo 3' },
    { url: '/assets/images/navbg02.jpg', alt: 'Photo 4' },
    ]
  },
    {name:'辦公空間',
      photos:[
    { url: '/assets/images/navbg04.jpg', alt: 'Photo 1' },
    { url: '/assets/images/navbg03.jpg', alt: 'Photo 2' },
    { url: '/assets/images/navbg04.jpg', alt: 'Photo 3' },
    ]},
      {name:'公共空間',
      photos:[
    { url: '/assets/images/navbg02.jpg', alt: 'Photo 1' },
    { url: '/assets/images/navbg03.jpg', alt: 'Photo 2' },
    { url: '/assets/images/navbg04.jpg', alt: 'Photo 3' },
    { url: '/assets/images/navbg05.jpg', alt: 'Photo 4' },
     { url: '/assets/images/navbg02.jpg', alt: 'Photo 1' }
    ]}

  ];
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
    // 僅在非最後一頁或向上滾動時攔截事件
    if (this.currentPageIndex < this.pages.length - 1 || event.deltaY < 0) {
      event.preventDefault();
    }
    if (this.isFlipping) return;

    if (Math.abs(event.deltaY) < 5) return; // 提高閾值，降低敏感度

<<<<<<< HEAD
    this.isFlipping = true;
    setTimeout(() => {
      this.isFlipping = false;
    }, 1000); // 防抖時間與動畫一致

    if (event.deltaY > 0) {
      this.nextPage();
    } else if (event.deltaY < 0) {
      this.prevPage();
    }
  }
    // 滑鼠按下開始拖曳
   @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (this.isFlipping) return;
    this.isDragging = true;
    this.startX = event.clientX;
    this.dragDelta = 0;
  }
  
    // 滑鼠移動：根據拖曳距離動態旋轉
   @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.dragDelta = this.startX - event.clientX;
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
        }, 1000);
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
//下一頁
     nextPage() {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.isSinglePage = false;
      this.rightFlipState = this.rightFlipState === 'back' ? 'front' : 'back';
      setTimeout(() => {
        this.currentPageIndex++;
        this.leftFlipState = 'front';
        this.rightFlipState = 'back';
        this.cdr.detectChanges();
      }, 100); // 動畫一半時間（1s / 2）
    }
  }
  //上一頁
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
      }, 100);
    }
  }
    

   // 獲取左頁圖片
   getLeftPage() {
    if (this.currentPageIndex === 1 && !this.isSinglePage) {
      return this.pages[0];
    }
    return this.pages[this.currentPageIndex];
  }
   
    // 獲取右頁圖片（如果有）
    
    // 當從第一頁翻到第二頁時，右頁顯示第二頁
      getRightPage() {
    if (this.currentPageIndex === 1 && !this.isSinglePage) {
      return this.pages[1];
    }
    return this.currentPageIndex + 1 < this.pages.length ? this.pages[this.currentPageIndex + 1] : null;
  }

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller,private cdr: ChangeDetectorRef) { }
=======
  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller,private cdr:ChangeDetectorRef) {
    gsap.registerPlugin(ScrollTrigger);
   }
>>>>>>> 3171bd72e12734f23e4d4184de0ec4af3c12780a

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = decodeURIComponent(params.get('name') || '沒有');
      // 查找對應的照片
      this.selectedPhotos = this.photos.filter(x=>x.name ==id)[0]
      console.log(this.selectedPhotos)
      this.viewportScroller.scrollToPosition([0, 0]); // 滾動到頂部
    });

  }







}
