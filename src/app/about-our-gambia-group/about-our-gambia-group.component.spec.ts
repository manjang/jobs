import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurGambiaGroupComponent } from './about-our-gambia-group.component';

describe('AboutOurGambiaGroupComponent', () => {
  let component: AboutOurGambiaGroupComponent;
  let fixture: ComponentFixture<AboutOurGambiaGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOurGambiaGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOurGambiaGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
