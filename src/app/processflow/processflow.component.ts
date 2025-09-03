import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processflow',
  templateUrl: './processflow.component.html',
  styleUrls: ['./processflow.component.css']
})
export class ProcessflowComponent implements OnInit {
  ccitems:number[]=[1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

}
