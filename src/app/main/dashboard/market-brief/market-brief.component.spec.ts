import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketBriefComponent } from './market-brief.component';

describe('MarketBriefComponent', () => {
  let component: MarketBriefComponent;
  let fixture: ComponentFixture<MarketBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketBriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
