import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './app-scroll-to-top.component.html'
})
export class AppScrollToTopComponent implements OnInit {
  readonly SCROLL_THRESHOLD = 50;
  readonly DEFAULT_BTN_CLS = 'fixed bottom-8 right-6 z-50 items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out';

  faArrowUp = faArrowUp;
  btnCls = this.DEFAULT_BTN_CLS;
  isVisible = false;

  ngOnInit(): void {
    this.handleScroll();
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(): void {
    this.isVisible = window.scrollY > this.SCROLL_THRESHOLD;
  }

  onClickBtn(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}