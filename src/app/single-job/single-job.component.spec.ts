import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJobComponent } from './single-job.component';

describe('SingleJobComponent', () => {
  let component: SingleJobComponent;
  let fixture: ComponentFixture<SingleJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
