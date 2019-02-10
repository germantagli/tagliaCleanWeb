import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NostrosComponent } from './nostros/nostros.component';
import { FooterComponent } from './footer/footer.component';
import { SocialbarComponent } from './socialbar/socialbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeMobileComponent } from './home-mobile/home-mobile.component';
import { ServiceMobileComponent } from './service-mobile/service-mobile.component';
import { NosotrosMobileComponent } from './nosotros-mobile/nosotros-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosComponent,
    ContactosComponent,
    NostrosComponent,
    FooterComponent,
    SocialbarComponent,
    HomeMobileComponent,
    ServiceMobileComponent,
    NosotrosMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
