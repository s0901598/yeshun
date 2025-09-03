import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.css']
})
export class ImagecardComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';

  

  constructor() { }

  ngOnInit(): void {
  }

}
