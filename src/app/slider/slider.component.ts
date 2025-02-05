import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  images: string[] = [
    'assets/slide_guadalimon.jpg',
    'assets/slide_guadalimon2.jpg',
    'assets/slide_guadalimon3.jpg',
    'assets/slide_premium.jpg',
    'assets/slide_SG.png',
  ];

  currentIndex: number = 0;

  constructor() { }

  prevItem() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }


}
