import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  works = [
    { imageUrl: '/assets/images/navbg.jpg', title: '住宅空間', subtitle: 'Residential Space' },
    { imageUrl: '/assets/images/navbg02.jpg', title: '商業空間', subtitle: 'Commercial Space' },
    { imageUrl: '/assets/images/navbg03.jpg', title: '辦公空間', subtitle: 'Office Space' },
    { imageUrl: '/assets/images/navbg03.jpg', title: '辦公空間', subtitle: 'Office Space' },
    
        


  ];


  constructor() { }

  ngOnInit(): void {
    
  }

}
