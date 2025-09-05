import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photos=[{url:"../../assets/images/navbg.jpg"},{url:"../../assets/images/navbg02.jpg"},{url:"../../assets/images/navbg03.jpg"},{url:"../../assets/images/navbg03.jpg"}]

  constructor() { }

  ngOnInit(): void {
  }

}
