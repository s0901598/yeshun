import { ViewportScroller } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photodetail',
  templateUrl: './photodetail.component.html',
  styleUrls: ['./photodetail.component.css']
})
export class PhotodetailComponent implements OnInit {
  selectedPhoto: { url: string, alt: string } | null = null;
  photos = [
    { url: '../../assets/images/navbg02.jpg', alt: 'Photo 1' },
    { url: '../../assets/images/navbg03.jpg', alt: 'Photo 2' },
    { url: '../../assets/images/navbg04.jpg', alt: 'Photo 3' },
    { url: '../../assets/images/navbg05.jpg', alt: 'Photo 4' },
    { url: '../../assets/images/navbg06.jpg', alt: 'Photo 5' } // 添加更多圖片以測試滾動
  ];
 

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const imageUrl = decodeURIComponent(params.get('imageUrl') || '');
      // 查找對應的照片
      this.selectedPhoto = this.photos.find(photo => photo.url === imageUrl) || this.photos[1]; // 默認顯示第一張
      this.viewportScroller.scrollToPosition([0, 0]); // 滾動到頂部
    });
    
  }
}
