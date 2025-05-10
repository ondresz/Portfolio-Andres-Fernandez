import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { AnimationLottieComponent } from '@/app/components/shared/animation-lottie/animation-lottie.component';
import { experiences } from '@/utils/data/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, AnimationLottieComponent, FontAwesomeModule, AnimationLottieComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences = experiences;
  workIcon = faBriefcase;
  lottieFile: any;

  async ngOnInit() {
    try {
      this.lottieFile = await fetch('assets/lottie/code.json').then(res => res.json());
    } catch (error) {
      console.error('Error loading Lottie animation:', error);
    }
  }
}