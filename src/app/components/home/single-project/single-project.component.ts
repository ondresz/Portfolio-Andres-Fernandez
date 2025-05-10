import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faCode } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../../../core/models/project.interface';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule]
})
export class SingleProjectComponent {
  @Input() project!: Project;

  faPlay = faPlay;
  faCode = faCode;
  placeholderImage = 'assets/png/placeholder.png';
}