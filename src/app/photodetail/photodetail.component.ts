import { ViewportScroller } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photodetail',
  templateUrl: './photodetail.component.html',
  styleUrls: ['./photodetail.component.css']
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


  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) { }

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
