import { Component, OnInit } from '@angular/core';
import {HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isScrolled=false;

  // 切換漢堡選單
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // 點擊導航項目後收合選單
  closeMenu() {
    this.isMenuOpen = false;
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 50; // 當滾動超過50px時觸發
  }

  constructor() { }

  ngOnInit(): void {
  }

}

