import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutReflexologyComponent } from './about-reflexology.component';

describe('AboutReflexologyComponent', () => {
  let component: AboutReflexologyComponent;
  let fixture: ComponentFixture<AboutReflexologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutReflexologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutReflexologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
