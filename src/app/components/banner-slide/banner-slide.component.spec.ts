import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSlideComponent } from './banner-slide.component';

describe('BannerSlideComponent', () => {
  let component: BannerSlideComponent;
  let fixture: ComponentFixture<BannerSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
