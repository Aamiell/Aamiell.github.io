import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPracticeComponent } from './modify-practice.component';

describe('ModifyPracticeComponent', () => {
  let component: ModifyPracticeComponent;
  let fixture: ComponentFixture<ModifyPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
