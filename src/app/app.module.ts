import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PhotodetailComponent } from './photodetail/photodetail.component';
import { ProcessComponent } from './process/process.component';
import { ProcessflowComponent } from './processflow/processflow.component';
import { ContactComponent } from './contact/contact.component';
import { ImagecardComponent } from './imagecard/imagecard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PortfolioComponent,
    PhotodetailComponent,
    ProcessComponent,
    ProcessflowComponent,
    ContactComponent,
    ImagecardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
