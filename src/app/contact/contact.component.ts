import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts = [
    {title:"服務範圍",subtitle:"無論您是想建造夢想中的家、升級商業空間，還是參與大型公共項目，我們都準備好與您攜手合作。讓我們用專業與熱情，將您的想法化為現實！",item:"住宅營造：打造溫馨舒適的家，從獨棟別墅到集合住宅，滿足您的生活需求。" },
    {title:"服務範圍",subtitle:"無論您是想建造夢想中的家、升級商業空間，還是參與大型公共項目，我們都準備好與您攜手合作。讓我們用專業與熱情，將您的想法化為現實！",item:"公共工程：參與學校、醫院、社區中心等項目，以安全與實用為核心，服務社會。" },
    {title:"服務範圍",subtitle:"無論您是想建造夢想中的家、升級商業空間，還是參與大型公共項目，我們都準備好與您攜手合作。讓我們用專業與熱情，將您的想法化為現實！",item:"裝修與翻新：老屋翻新、室內裝潢，保留經典或注入現代元素，讓空間煥然一新。" },

  ];
  joins = [
   {title:"加入業順",subtitle:"我們是一家專業的營造公司，致力於打造高品質的建築工程，以創新、效率、品質與永續為核心價值。",item:"1.具競爭力的薪資：依經驗與能力提供優於業界的薪酬與福利。" },
    {title:"加入業順",subtitle:"我們正在尋找充滿熱情、專業且有志於建築行業的人才，加入我們的團隊，一起創造卓越的建築作品！",item:"2.專業成長機會：提供內部培訓與外部進修支持，助你成為行業頂尖人才。" },
    {title:"加入業順",subtitle:"如果你有熱忱,歡迎加入業順！",item:"3.良好工作環境：友善的團隊文化，重視工作與生活的平衡。" },
    {title:"加入業順",subtitle:"我們提供：",item:"4.參與重大項目：從住宅到公共工程，與我們一起打造改變城市面貌的建築。" },
  ];
 
 

  constructor() { }

  ngOnInit(): void {
  }

}
