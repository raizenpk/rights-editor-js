import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayout } from './default.layout';

describe('DefaultLayoutComponent', () => {
  let component: DefaultLayout;
  let fixture: ComponentFixture<DefaultLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultLayout ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
