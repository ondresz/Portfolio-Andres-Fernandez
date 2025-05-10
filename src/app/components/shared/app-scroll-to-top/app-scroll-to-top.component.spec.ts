import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppScrollToTopComponent } from './app-scroll-to-top.component';

describe('AppScrollToTopComponent', () => {
  let component: AppScrollToTopComponent;
  let fixture: ComponentFixture<AppScrollToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppScrollToTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppScrollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
