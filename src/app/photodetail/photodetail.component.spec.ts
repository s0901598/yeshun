import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotodetailComponent } from './photodetail.component';

describe('PhotodetailComponent', () => {
  let component: PhotodetailComponent;
  let fixture: ComponentFixture<PhotodetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotodetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
