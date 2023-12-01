import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

interface Slide {
  img: string;
}
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() urls: string[] = [];

  slides: Slide[] = [];

  slideConfig = {
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
  };

  ngOnInit(): void {
    this.slides = this.urls.map((url) => ({ img: url }));
  }
}
