import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalData } from '@/utils/data/personal-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  personalData = personalData;

  ngOnInit(): void {
    // Optional: You can add any initialization logic here
  }
}
