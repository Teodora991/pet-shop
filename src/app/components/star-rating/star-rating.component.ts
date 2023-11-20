import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent {
  @Input() averageRating: number = 0;
  @Input() ratings: number[] = [];
  @Output() ratingUpdated = new EventEmitter();

  rating = -1;

  onClick(rating: number) {
    this.rating = rating;
    this.ratingUpdated.emit(rating + 1);
  }

  showIcon(index: number) {
    if (this.rating >= index) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  getRatingPercentage(rating: number): number {
    const count = this.countRatings(rating);
    const total = this.ratings.length;
    return (count / total) * 100;
  }

  countRatings(rating: number): number {
    return this.ratings.filter((r) => r === rating).length;
  }
}
