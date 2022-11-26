import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShansLoginComponent } from './shans-login.component';

describe('ShansLoginComponent', () => {
  let component: ShansLoginComponent;
  let fixture: ComponentFixture<ShansLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShansLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShansLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
