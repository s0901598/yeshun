import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadingmask:boolean = true;
  title = 'yeshunweb';
   ngOnInit(): void {
      setTimeout(()=> {
        this.loadingmask = false;
        document.body.style.overflow = 'auto'
      },5000);
  }
}
