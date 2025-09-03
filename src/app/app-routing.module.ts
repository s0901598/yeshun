import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PhotodetailComponent } from './photodetail/photodetail.component';
import { ProcessComponent } from './process/process.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
