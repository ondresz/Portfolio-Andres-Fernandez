import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowCardComponent } from './glow-card.component';

describe('GlowCardComponent', () => {
  let component: GlowCardComponent;
  let fixture: ComponentFixture<GlowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlowCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
