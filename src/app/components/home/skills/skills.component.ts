import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { skillsData } from '@/utils/data/skills';
import skillsImage from '@/utils/helpers/skill-image';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = skillsData;
  getSkillImage = skillsImage;
}