import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '@/core/models/project-card.interface';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectCardComponent {
  @Input() project!: ProjectCard;
}