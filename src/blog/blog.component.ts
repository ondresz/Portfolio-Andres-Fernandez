import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from '../app/components/shared/blog-card/blog-card.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
}