import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photodetail',
  templateUrl: './photodetail.component.html',
  styleUrls: ['./photodetail.component.css']
})
export class PhotodetailComponent implements OnInit {
  photos = [
    { url: '../../assets/images/navbg02.jpg', alt: 'Photo 1' },
    { url: '../../assets/images/navbg03.jpg', alt: 'Photo 2' },
    { url: '../../assets/images/navbg04.jpg', alt: 'Photo 3' },
    { url: '../../assets/images/navbg05.jpg', alt: 'Photo 4' },
    { url: '../../assets/images/navbg06.jpg', alt: 'Photo 5' } // 添加更多圖片以測試滾動
  ];
 

  constructor() { }

  ngOnInit(): void {
    
  }
}
