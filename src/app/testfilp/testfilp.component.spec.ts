import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfilpComponent } from './testfilp.component';

describe('TestfilpComponent', () => {
  let component: TestfilpComponent;
  let fixture: ComponentFixture<TestfilpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestfilpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestfilpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
