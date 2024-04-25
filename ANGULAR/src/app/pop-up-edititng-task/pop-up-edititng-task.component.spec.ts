import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEdititngTaskComponent } from './pop-up-edititng-task.component';

describe('PopUpEdititngTaskComponent', () => {
  let component: PopUpEdititngTaskComponent;
  let fixture: ComponentFixture<PopUpEdititngTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpEdititngTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpEdititngTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
