import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '@/core/services/blog.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Blog } from '@/core/models/blog.model';
import { BlogCardComponent } from '../../shared/blog-card/blog-card.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, BlogCardComponent, FontAwesomeModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  faArrowRight = faArrowRight;
  isLoading = true;
  error: string | null = null;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe({
      next: (blogs) => {
        console.log("Blogs fetched successfully:", blogs);
        this.blogs = blogs;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error fetching blogs:", error);
        this.error = "Failed to load blog posts";
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  trackBlog(index: number, blog: Blog): string {
    return blog.id.toString();
  }
}
