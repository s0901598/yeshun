import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  works = [
    { imageUrl: '/assets/images/navbg.jpg',url: '/assets/images/navbg02.jpg', title: '住宅空間', subtitle: 'Residential Space' },
    { imageUrl: '/assets/images/navbg02.jpg', url: '/assets/images/navbg03.jpg',title: '商業空間', subtitle: 'Commercial Space' },
    { imageUrl: '/assets/images/navbg03.jpg', url: '/assets/images/navbg04.jpg',title: '辦公空間', subtitle: 'Office Space' },
    { imageUrl: '/assets/images/navbg04.jpg', url: '/assets/images/navbg05.jpg',title: '辦公空間', subtitle: 'Office Space' },
  ];


  constructor(private router:Router) { }

  ngOnInit(): void {}
  navigateToPhotoDetail(url: string) {
    this.router.navigate(['/photodetail', encodeURIComponent(url)]);
    console.log(url)
  }

}
