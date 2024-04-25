import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoUpDeletingTaskComponent } from './po-up-deleting-task.component';

describe('PoUpDeletingTaskComponent', () => {
  let component: PoUpDeletingTaskComponent;
  let fixture: ComponentFixture<PoUpDeletingTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoUpDeletingTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoUpDeletingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
