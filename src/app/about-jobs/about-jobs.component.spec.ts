import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJobsComponent } from './about-jobs.component';

describe('AboutJobsComponent', () => {
  let component: AboutJobsComponent;
  let fixture: ComponentFixture<AboutJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
