// src/shared/animation-lottie/animation-lottie.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent } from 'ngx-lottie';
import { AnimationOptions } from 'ngx-lottie';
import player from 'lottie-web';

// Note we need a separate function as per AOT compilation requirements
export function playerFactory() {
  return player;
}

@Component({
  selector: 'app-animation-lottie',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './animation-lottie.component.html',
  styles: [`:host { display: block; }`]
})
export class AnimationLottieComponent {
  @Input() set animationPath(value: any) {
    this.options = {
      ...this.options,
      animationData: value
    };
  }

  @Input() set width(value: string) {
    this.styles = {
      ...this.styles,
      width: value
    };
  }

  options: AnimationOptions = {
    path: '',
    loop: true,
    autoplay: true
  };

  styles: any = {
    width: '95%'
  };
}