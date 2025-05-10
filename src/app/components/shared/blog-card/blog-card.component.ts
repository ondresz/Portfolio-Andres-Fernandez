import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Blog } from '../../../../core/models/blog.model';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() blog!: Blog;

  heartIcon = faHeart;
  commentIcon = faComment;
}