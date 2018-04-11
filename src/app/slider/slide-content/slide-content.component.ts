import { Component, OnInit } from '@angular/core';
import {SliderService} from '../slider.service';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.css']
})
export class SlideContentComponent implements OnInit {
  slideId: number;

  constructor(private slideService: SliderService) {
  }

  ngOnInit() {
    this.slideId = this.slideService.createSlideId();
    this.slideService.addSlide();
  }

  public isCurrentSlide() {
   return this.slideService.getCurrentSlide() === this.slideId;
  }
}
