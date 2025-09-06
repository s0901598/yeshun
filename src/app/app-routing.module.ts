import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PhotodetailComponent } from './photodetail/photodetail.component';
import { ProcessComponent } from './process/process.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent,
  },
  {
    path:'portfolio',component:PortfolioComponent,
    children:[
      {
        path:'photodetail',component:PhotodetailComponent
      }
    ]
  },
  {
    path:'process',component:ProcessComponent,
  },
  {
    path:'contact',component:ContactComponent,
  },{
    path:'photodetail/:name',component:PhotodetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
