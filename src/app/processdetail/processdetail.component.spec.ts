import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessdetailComponent } from './processdetail.component';

describe('ProcessdetailComponent', () => {
  let component: ProcessdetailComponent;
  let fixture: ComponentFixture<ProcessdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
