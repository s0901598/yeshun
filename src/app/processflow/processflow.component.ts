import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-processflow',
  templateUrl: './processflow.component.html',
  styleUrls: ['./processflow.component.css']
})
export class ProcessflowComponent implements OnInit {

  @Input('flows') flows:any;


  constructor() { }

  ngOnInit(): void {
  }

}
