// src/shared/glow-card/glow-card.component.ts
import { Component, Input, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glow-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glow-card.component.html',
  styleUrls: ['./glow-card.component.css']
})
export class GlowCardComponent implements AfterViewInit, OnDestroy {
  @Input() identifier: string = '';

  private config = {
    proximity: 40,
    spread: 80,
    blur: 12,
    gap: 32,
    vertical: false,
    opacity: 0,
  };

  private container: HTMLElement | null = null;
  private cards: NodeListOf<Element> | null = null;
  private boundUpdateHandler: (event: PointerEvent) => void;

  constructor(private elementRef: ElementRef) {
    // Bind the update method to preserve context
    this.boundUpdateHandler = this.update.bind(this);
  }

  ngAfterViewInit() {
    this.container = document.querySelector(`.glow-container-${this.identifier}`);
    this.cards = document.querySelectorAll(`.glow-card-${this.identifier}`);

    this.restyle();
    this.update();

    document.body.addEventListener('pointermove', this.boundUpdateHandler);
  }

  ngOnDestroy() {
    document.body.removeEventListener('pointermove', this.boundUpdateHandler);
  }

  private update(event?: PointerEvent) {
    if (!this.cards) return;

    for (const card of Array.from(this.cards)) {
      const cardBounds = card.getBoundingClientRect();

      if (event) {
        if (
          event.x > cardBounds.left - this.config.proximity &&
          event.x < cardBounds.left + cardBounds.width + this.config.proximity &&
          event.y > cardBounds.top - this.config.proximity &&
          event.y < cardBounds.top + cardBounds.height + this.config.proximity
        ) {
          (card as HTMLElement).style.setProperty('--active', '1');
        } else {
          (card as HTMLElement).style.setProperty('--active', this.config.opacity.toString());
        }

        const cardCenter = [
          cardBounds.left + cardBounds.width * 0.5,
          cardBounds.top + cardBounds.height * 0.5,
        ];

        let angle = (Math.atan2(event.y - cardCenter[1], event.x - cardCenter[0]) * 180) / Math.PI;
        angle = angle < 0 ? angle + 360 : angle;

        (card as HTMLElement).style.setProperty('--start', (angle + 90).toString());
      }
    }
  }

  private restyle() {
    if (!this.container) return;

    this.container.style.setProperty('--gap', this.config.gap.toString());
    this.container.style.setProperty('--blur', this.config.blur.toString());
    this.container.style.setProperty('--spread', this.config.spread.toString());
    this.container.style.setProperty(
      '--direction',
      this.config.vertical ? 'column' : 'row'
    );
  }
}