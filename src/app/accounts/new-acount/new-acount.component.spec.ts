import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAcountComponent } from './new-acount.component';

describe('NewAcountComponent', () => {
  let component: NewAcountComponent;
  let fixture: ComponentFixture<NewAcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
