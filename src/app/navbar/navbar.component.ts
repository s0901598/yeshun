import { Component, OnInit } from '@angular/core';
import {HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled=false;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 50; // 當滾動超過50px時觸發
  }

  constructor() { }

  ngOnInit(): void {
  }

}

