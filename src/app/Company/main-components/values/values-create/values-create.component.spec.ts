import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesCreateComponent } from './values-create.component';

describe('ValuesCreateComponent', () => {
  let component: ValuesCreateComponent;
  let fixture: ComponentFixture<ValuesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
