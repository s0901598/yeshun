import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  works = [
    { imageUrl: '/assets/images/navbg.jpg', name: '住宅空間', subtitle: 'Residential Space' },
    { imageUrl: '/assets/images/navbg02.jpg',name: '商業空間', subtitle: 'Commercial Space' },
    { imageUrl: '/assets/images/navbg03.jpg', name: '辦公空間', subtitle: 'Office Space' },
    { imageUrl: '/assets/images/navbg04.jpg',name: '公共空間', subtitle: 'Office Space' },
  ];


  constructor(private router:Router) { }

  ngOnInit(): void {}
  navigateToPhotoDetail(name: string) {
    this.router.navigate(['/photodetail',name]);
  }

}
