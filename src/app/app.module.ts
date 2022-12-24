import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { TraditionalArt } from './components/traditional_art/traditional_art.component';
import { FormsModule } from '@angular/forms';
import { DigitalGraphic } from './components/digital_graphic/digital_graphic.component';
import { DrawingOnCloth } from './components/drawing_on_cloth/drawing_on_cloth.component';
import { HeaderComponent } from './components/interfaceelements/header/header.component';
import { FooterComponent } from './components/interfaceelements/footer/footer.component';
import { NavigationburgerComponent } from './components/navigationburger/navigationburger.component';
import { MaincenterComponent } from './components/maincenter/maincenter.component';
import { FreelanceArtComponent } from './components/freelance-art/freelance-art.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FavouritepicturessliderComponent } from './components/favouritepicturesslider/favouritepicturesslider.component';

@NgModule({
  declarations: [
    AppComponent,
    TraditionalArt,
    DigitalGraphic,
    DrawingOnCloth,
    HeaderComponent,
    FooterComponent,
    NavigationburgerComponent,
    MaincenterComponent,
    FreelanceArtComponent,
    ContactsComponent,
    FavouritepicturessliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
