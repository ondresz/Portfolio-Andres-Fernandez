import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navItems = [
    { path: '/#about', label: 'ABOUT' },
    { path: '/#experience', label: 'HOBBIES' },
    { path: '/#skills', label: 'SKILLS' },
    { path: '/#education', label: 'SOFT SKILLS' },
    { path: '/blog', label: '404 FEHLER' },
    { path: '/#projects', label: 'PROJECTS' }
  ];
}