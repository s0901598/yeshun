import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessflowComponent } from './processflow.component';

describe('ProcessflowComponent', () => {
  let component: ProcessflowComponent;
  let fixture: ComponentFixture<ProcessflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
