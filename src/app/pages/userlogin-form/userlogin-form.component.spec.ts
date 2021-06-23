import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginFormComponent } from './userlogin-form.component';

describe('UserloginFormComponent', () => {
  let component: UserloginFormComponent;
  let fixture: ComponentFixture<UserloginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserloginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
