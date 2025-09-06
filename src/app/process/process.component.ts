import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
})
export class ProcessComponent implements OnInit {

   processFlows =[
    {
      flowName:'服務流程',
      direction:'left',
      services:[
    {no:"1.", title:"初步接洽",subtitle: '巴爾扎克講過一句話' },
    {no:"2.",title:"設計合約",subtitle:"這讓我深深地想到谷。"},
    {no:"3.",title:"圖面溝通",subtitle:"只有勇敢的人才能通過。？"},
    {no:"4.",title:"細節討論",subtitle:"這種事實對本人來說意義重大"},
    {no:"5.",title:"定案完稿",subtitle:"老子曾經說過這麼一句話"}
      ]
    },
    {
      flowName:'工程流程',
      direction:'right',
      services:[
        {no:"1.", title:"初步接洽",subtitle: '巴爾扎克講過一句話' },
        {no:"2.",title:"設計合約",subtitle:"這讓我深深地想到谷。"},
        {no:"3.",title:"圖面溝通",subtitle:"只有勇敢的人才能通過。？"},
        {no:"4.",title:"細節討論",subtitle:"這種事實對本人來說意義重大"},
        {no:"5.",title:"定案完稿",subtitle:"老子曾經說過這麼一句話"}
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
