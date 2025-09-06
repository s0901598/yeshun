import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


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

  constructor(private viewportScroller: ViewportScroller,private router:Router) { }

  ngOnInit(): void {
    this.router.events
        .subscribe((event) => {
         this.viewportScroller.scrollToPosition([0,0])
        });
  }

}

