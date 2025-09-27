import { ViewportScroller } from '@angular/common';
import { Component, OnInit,HostListener, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-photodetail',
  templateUrl: './photodetail.component.html',
  styleUrls: ['./photodetail.component.css']
})
export class PhotodetailComponent implements OnInit {
 scrollPercentage: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    // 取得當前卷軸位置
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    // 取得頁面總高度
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // 計算百分比
    this.scrollPercentage = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
    console.log('當前卷軸百分比:', this.scrollPercentage.toFixed(1) + '%');



    if(this.scrollPercentage>=40 && this.scrollPercentage<=80) {
      this.isScrolling = true;
    }
    else if(this.scrollPercentage >80) {
      this.isScrolling = false;
    }

  }



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


  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller,private cdr:ChangeDetectorRef) {
    gsap.registerPlugin(ScrollTrigger);
    this.route.params.subscribe(x=>{
      console.log(x);
    })
   }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = decodeURIComponent(params.get('name') || '沒有');
      // 查找對應的照片
      this.selectedPhotos = this.photos.filter(x=>x.name ==id)[0]
      console.log(this.selectedPhotos)
      this.viewportScroller.scrollToPosition([0, 0]); // 滾動到頂部
    });

  } panels = ['Panel 1', 'Panel 2', 'Panel 3', 'Panel 4', 'Panel 5'];
  currentIndex = 0;
  panelCount = 5;
  isScrolling = false;
  scrollAccumulator = 0;
  scrollThreshold = 80;

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
event.preventDefault();
    if(!this.isScrolling){
        event.preventDefault();
    }

    // if (this.isScrolling){
    // event.preventDefault();
    //   return;
    // }

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

      // setTimeout(() => {
      //   this.isScrolling = false;
      // }, 1000);
    }
  }


getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }





}
