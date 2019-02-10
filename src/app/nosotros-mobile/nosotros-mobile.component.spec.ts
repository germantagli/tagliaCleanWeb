import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosMobileComponent } from './nosotros-mobile.component';

describe('NosotrosMobileComponent', () => {
  let component: NosotrosMobileComponent;
  let fixture: ComponentFixture<NosotrosMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
