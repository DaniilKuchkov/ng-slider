import {Component, OnInit} from '@angular/core';
import {SliderService} from './slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(public sliderService: SliderService) {}

  ngOnInit() {
    this.sliderService.setCurrentSlide(1);
  }
}
