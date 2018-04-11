import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SliderNavComponent } from './slider/slider-nav/slider-nav.component';
import {SliderService} from './slider/slider.service';
import { SlideContentComponent } from './slider/slide-content/slide-content.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SliderNavComponent,
    SlideContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
