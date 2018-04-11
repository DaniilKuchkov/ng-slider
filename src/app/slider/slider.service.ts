import { Injectable } from '@angular/core';

interface Slide {
  id: number;
}
@Injectable()
export class SliderService {
 sliderCount: number;
 currentSlide: number;
 slideList: Slide[];
 self: object;

 constructor() {
   this.slideList = [];
   this.sliderCount = this.slideList.length;
   this.currentSlide = 0;
   this.self = this;
 }

 public setCurrentSlide(slideNumber) {
  return this.currentSlide = slideNumber;
 }

 public createSlideId() {
   return this.sliderCount + 1;
 }

 public addSlide() {
   this.sliderCount++;
   return this.slideList.push({
     id: this.sliderCount + 1
   });
 }

 public getCurrentSlide() {
   return this.currentSlide;
 }

 public isLastSlide() {
   return this.currentSlide === this.sliderCount;
 }

 public isFirstSlide() {
   return this.currentSlide === 0;
 }

 public nextSlide() {
   if (!this.isLastSlide()) {
     return this.currentSlide++;
   }
 }

 public prevSlide() {
   if (!this.isFirstSlide()) {
     return this.currentSlide--;
   }
 }
}
