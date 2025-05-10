import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { AnimationLottieComponent } from '@/app/components/shared/animation-lottie/animation-lottie.component';
import { educations } from '@/utils/data/educations';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, AnimationLottieComponent, FontAwesomeModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations = educations;
  workspaceIcon = faGraduationCap;
  lottieFile: any;

  async ngOnInit() {
    try {
      this.lottieFile = await fetch('assets/lottie/education.json').then(res => res.json());
    } catch (error) {
      console.error('Error loading Lottie animation:', error);
    }
  }
}