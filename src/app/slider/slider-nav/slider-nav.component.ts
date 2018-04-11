import {Component, Input, OnInit} from '@angular/core';
import {SliderService} from '../slider.service';

@Component({
  selector: 'app-slider-nav',
  templateUrl: './slider-nav.component.html',
  styleUrls: ['./slider-nav.component.css']
})
export class SliderNavComponent {
  @Input() currentSlide: number;
  @Input() slideCount: number;

  constructor(public sliderService: SliderService) {}

  public nextSlide() {
    this.sliderService.nextSlide();
  }

  public prevSlide() {
    this.sliderService.prevSlide();
  }

}
